from django.shortcuts import render, redirect, get_object_or_404
from django.http import JsonResponse
from rationapp.models import ration,general,ingredients, composition, people
from django.contrib import messages
from django.contrib.auth import authenticate 
from django.contrib.auth.models import User

import random
import string
import re

form_ration_name = None

def generate_unique_code(model, field, length=12):
    """Генерация уникального кода для модели."""
    characters = string.ascii_letters + string.digits
    unique_code = ''.join(random.choices(characters, k=length))
    while model.objects.filter(**{field: unique_code}).exists():
        unique_code = ''.join(random.choices(characters, k=length))
    return unique_code

def delete_ration(request, ration_id):
    ration_to_delete = get_object_or_404(ration, id_ration=ration_id)
    ration_to_delete.delete()
    return redirect('main')  

def glav_techn_func(request):
    rations = ration.objects.all()
    compositions = composition.objects.all()
    return render(request, 'rationapp/glav_techn.html', context={'rations':rations, 'compositions':compositions})

def bas_inf_about_ration_func(request):
    if request.method == 'POST':
        form_ration_name = request.POST.get('ration-name')
        request.session['ration-name'] = form_ration_name
        
        if ration.objects.exists():
            new_id = ration.objects.last().id_ration + 1
        else:
            new_id = 1

        ration_obj = ration(
            id_ration=new_id,
            name=form_ration_name,
            organization=request.POST.get('organisation-name'),
            description=request.POST.get('Ration-textarea'),
            date=request.POST.get('calendar-date'),
            count_pp=request.POST.get('count-meal-days'),
            count_day=request.POST.get('count-ration-date'),
            technologist=request.POST.get('technologist')
        )
        ration_obj.save()
        
        return redirect('restrictions')  # Перенаправляем сразу на страницу restrictions
        
    rations = ration.objects.all()
    return render(request, 'rationapp/bas_inf_about_ration.html', context={'rations':rations})

def registration_func(request):
    if request.method == 'POST':
        fio = request.POST.get('fio')
        role = request.POST.get('role')
        post = request.POST.get('post')
        email = request.POST.get('email')
        password = request.POST.get('password')

        # Проверка на пустые поля
        if not all([fio, role, post, email, password]):
            return JsonResponse({'success': False, 'error': 'Все поля обязательны для заполнения.'}, status=400)

        try:
            # Создаем запись в people
            new_person = people(fio=fio, role=role, position=post, email=email)
            new_person.save()

            # Создаем учетную запись пользователя
            user = User.objects.create_user(username=fio, email=email, password=password)
            user.save()

            # Успешная регистрация
            return JsonResponse({'success': True}, status=200)
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=500)

    return render(request, 'rationapp/registration.html')

def restrictions_func(request):
    if request.method == 'POST':
        form_ration_name = request.POST.get('ration-name')
        request.session['ration-name'] = form_ration_name
        
        if ration.objects.exists():
            new_id = ration.objects.last().id_ration + 1
        else:
            new_id = 1

        # Создание нового объекта рациона
        ration_obj = ration(
            id_ration=new_id,
            name=form_ration_name,
            organization=request.POST.get('organisation-name'),
            description=request.POST.get('Ration-textarea'),
            date=request.POST.get('calendar-date'),
            count_pp=request.POST.get('count-meal-days'),
            count_day=request.POST.get('count-ration-date'),
            technologist=request.POST.get('technologist')
        )
        ration_obj.save()
        return redirect('restrictions')

    # Получаем выбранные ингредиенты из сессии
    selected_ingredients = request.session.get('selected_ingredients', [])
    
    # Если есть выбранные ингредиенты, формируем строку для отображения
    ingredient_display = ', '.join(selected_ingredients) if selected_ingredients else 'Ингредиент'
    
    context = {
        'ingredient_display': ingredient_display
    }
    return render(request, 'rationapp/restrictions.html', context)

def medical_restrictions_func(request):
        form_ration_name = request.POST.get('ration-name')
        request.session['ration-name'] = form_ration_name
        return render(request,'rationapp/medical_restrictions.html', context={"form_ration_name":form_ration_name})

def religion_restrictions_func(request):
        form_ration_name = request.POST.get('ration-name')
        request.session['ration-name'] = form_ration_name
        return render(request,'rationapp/religion_restrictions.html', context={"form_ration_name":form_ration_name})

def ingredient_restructions_func(request):
    if request.method == 'POST':
        # Получаем выбранные ограничения из формы
        selected_ingredients = request.POST.getlist('ingredients[]')
        # Сохраняем их в сессии
        request.session['selected_ingredients'] = selected_ingredients
        return redirect('restrictions')
    form_ration_name = request.session['ration-name']
    return render(request,'rationapp/ingredient_restructions.html', context={"form_ration_name":form_ration_name})

def sozdanie_ration_func(request):
    form_ration_name = request.session['ration-name']
    return render(request,'rationapp/sozdanie_ration.html',context={"form_ration_name":form_ration_name})

def sozdanie_pk_func(request):
    generals = general.objects.all().prefetch_related("ingredients")
    ingredients_list = ingredients.objects.all()
    context = {
        "generals": generals,
        "ingredients": ingredients_list
    }

    if request.method == 'POST':
        # Получение и обработка списка ингредиентов
        ingredient_data = request.POST.get('ingredient_list', '').strip()
        if not ingredient_data:
            context['error'] = 'Список ингредиентов пуст.'
            return render(request, 'rationapp/sozdanie_pk.html', context)

        ingredient_list = [item.split(';') for item in ingredient_data.split('|') if item]

        unique_code = generate_unique_code(composition, 'code')

        # Проверка уникальности имени
        composition_name = request.POST.get("name_pc")
        if composition.objects.filter(name=composition_name).exists():
            composition_name = f"{composition_name}_{random.randint(1, 1000)}"

        # Создание нового объекта
        comp = composition(
            code=unique_code,
            name=composition_name,
            description=request.POST.get("description_pc")
        )
        comp.save()

        context['success'] = 'Композиция успешно создана!'
        return render(request, 'rationapp/sozdanie_pk.html', context)

    return render(request, 'rationapp/sozdanie_pk.html', context)

def sozdanie_ration_for_pk_func(request):
    return render(request,'rationapp/sozdanie_ration_for_pk.html')

def redact_ration_func(request):
    return render(request,'rationapp/redact_ration.html')


def vhod_func(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(f"POST запрос: username={username}, password={password}")

        user = authenticate(request, username=username, password=password)
        if user is not None:
            print(f"Успешная аутентификация пользователя: {username}")
            return JsonResponse({'success': True}, status=200)
        else:
            print(f"Ошибка аутентификации: {username}, password={password}")
            return JsonResponse({'error': 'Неверное имя пользователя или пароль'}, status=401)
    print("GET запрос на /vhod/")
    return render(request, 'rationapp/vhod.html')


def arhiv_func(request, technologist_id=None):
    if technologist_id:
        rations = ration.objects.filter(technologist__icontains=technologist_id)
    else:
        rations = ration.objects.all()
    return render(request, 'rationapp/arhiv.html', context={'rations': rations})

def arhiv_koncretnogo_techn_func(request):
    return render(request,'rationapp/arhiv_koncretnogo_techn.html')