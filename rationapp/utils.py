from django.db.models import Q
from rationapp.models import Ingredients, Limit, Ration

def calculate_ration(user, n_days, target_nutrients, meals):
    """
    Основной алгоритм расчёта рациона.
    :param user: Пользователь, для которого составляется рацион.
    :param n_days: Количество дней.
    :param target_nutrients: Целевые значения нутриентов (словарь).
    :param meals: Список приёмов пищи (например, ["breakfast", "lunch", "dinner"]).
    :return: Список рационов на каждый день.
    """
    # Получение разрешённых ингредиентов
    allowed_ingredients = get_allowed_ingredients(user)

    # Итоговый результат
    ration_result = []

    # Формирование рациона на каждый день
    for day in range(n_days):
        daily_plan = []
        for meal in meals:
            meal_plan = calculate_meal_plan(allowed_ingredients, target_nutrients)
            daily_plan.append({
                "meal": meal,
                "ingredients": meal_plan["ingredients"],
                "total_nutrients": meal_plan["total_nutrients"]
            })
        ration_result.append({"day": day + 1, "meals": daily_plan})

    return ration_result

def get_allowed_ingredients(user):
    """
    Получение списка разрешённых ингредиентов с учётом ограничений.
    :param user: Текущий пользователь.
    :return: QuerySet ингредиентов.
    """
    # Исключение запрещённых продуктов
    excluded_ingredients = Limit.objects.filter(user=user).values_list('code', flat=True)
    allowed_ingredients = Ingredients.objects.exclude(code__in=excluded_ingredients)
    return allowed_ingredients

def calculate_meal_plan(ingredients, target_nutrients):
    """
    Подбор ингредиентов для одного приёма пищи.
    :param ingredients: Список разрешённых ингредиентов.
    :param target_nutrients: Целевые значения нутриентов.
    :return: План питания для одного приёма пищи.
    """
    selected_ingredients = []
    total_nutrients = {key: 0 for key in target_nutrients.keys()}

    for ingredient in ingredients:
        if all(total_nutrients[nutrient] < target_nutrients[nutrient] for nutrient in target_nutrients.keys()):
            selected_ingredients.append({
                "ingredient": ingredient.name,
                "weight": ingredient.weight
            })
            for nutrient in target_nutrients.keys():
                total_nutrients[nutrient] += getattr(ingredient, nutrient) * (ingredient.weight / 100)

    return {"ingredients": selected_ingredients, "total_nutrients": total_nutrients}
