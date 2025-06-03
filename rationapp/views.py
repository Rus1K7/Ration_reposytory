from django.shortcuts import render, redirect, get_object_or_404
from django.http import JsonResponse
from rationapp.models import ration,general,ingredients, composition, people
from django.contrib import messages
from django.contrib.auth import authenticate 
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import random
import string
from rest_framework.authtoken.models import Token

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
    return JsonResponse({'success': True}, status=200)

def glav_techn_func(request):
    rations = ration.objects.all()
    compositions = composition.objects.all()
    return JsonResponse({'rations':rations, 'compositions':compositions}, status=200)

@csrf_exempt
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
        
        return redirect('restrictions')
        
    rations = list(ration.objects.all().values())
    return JsonResponse({'rations':rations}, status=200)

@csrf_exempt
def registration(request):
    if request.method == 'POST':
        try:
            if request.content_type == 'application/json':
                data = json.loads(request.body)
                fio = data.get('fio')
                role = data.get('role')
                post = data.get('post')
                email = data.get('email')
                password = data.get('password')
            else:
                fio = request.POST.get('fio')
                role = request.POST.get('role')
                post = request.POST.get('post')
                email = request.POST.get('email')
                password = request.POST.get('password')

            if not all([fio, role, post, email, password]):
                return JsonResponse({'success': False, 'error': 'Все поля обязательны для заполнения.'}, status=400)

            new_person = people(fio=fio, role=role, position=post, email=email)
            new_person.save()
            user = User.objects.create_user(username=fio, email=email, password=password)
            user.save()
            return JsonResponse({'success': True}, status=200)

        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=500)

    return JsonResponse({'success': False, 'error': 'Метод не разрешен'}, status=405)


@csrf_exempt
def restrictions(request):
    if request.method == 'POST':
        try:
            if request.content_type == 'application/json':
                data = json.loads(request.body)
                form_ration_name = data.get('ration-name')
                organisation_name = data.get('organisation-name')
                ration_text = data.get('Ration-textarea')
                calendar_date = data.get('calendar-date')
                count_meal_days = data.get('count-meal-days')
                count_ration_date = data.get('count-ration-date')
                technologist = data.get('technologist')
            else:
                form_ration_name = request.POST.get('ration-name')
                organisation_name = request.POST.get('organisation-name')
                ration_text = request.POST.get('Ration-textarea')
                calendar_date = request.POST.get('calendar-date')
                count_meal_days = request.POST.get('count-meal-days')
                count_ration_date = request.POST.get('count-ration-date')
                technologist = request.POST.get('technologist')

            request.session['ration-name'] = form_ration_name

            if ration.objects.exists():
                new_id = ration.objects.last().id_ration + 1
            else:
                new_id = 1

            ration_obj = ration(
                id_ration=new_id,
                name=form_ration_name,
                organization=organisation_name,
                description=ration_text,
                date=calendar_date,
                count_pp=count_meal_days,
                count_day=count_ration_date,
                technologist=technologist
            )
            ration_obj.save()

            return JsonResponse({
                'success': True,
                'message': 'Ration created successfully',
                'ration_id': new_id
            }, status=200)

        except Exception as e:
            return JsonResponse({
                'success': False,
                'error': str(e)
            }, status=500)

    selected_ingredients = request.session.get('selected_ingredients', [])
    return JsonResponse({
        'success': True,
        'selected_ingredients': selected_ingredients,
        'ingredient_display': ', '.join(selected_ingredients) if selected_ingredients else 'No ingredients selected'
    }, status=200)


@csrf_exempt  # Disable CSRF for testing (remove in production)
def medical_restrictions_func(request):
    if request.method == 'POST':
        try:
            if request.content_type == 'application/json':
                data = json.loads(request.body)
                form_ration_name = data.get('ration-name')
            else:
                form_ration_name = request.POST.get('ration-name')

            request.session['ration-name'] = form_ration_name

            return JsonResponse({
                'success': True,
                'message': 'Ration name stored successfully',
                'ration_name': form_ration_name
            }, status=200)

        except Exception as e:
            return JsonResponse({
                'success': False,
                'error': str(e)
            }, status=500)

    stored_ration_name = request.session.get('ration-name', 'No ration name stored')
    return JsonResponse({
        'success': True,
        'ration_name': stored_ration_name,
        'message': 'Current ration name retrieved from session'
    }, status=200)


@csrf_exempt  # Disable CSRF for testing (remove in production)
def religion_restrictions_func(request):
    if request.method == 'POST':
        try:
            # Handle both form-data and JSON input
            if request.content_type == 'application/json':
                data = json.loads(request.body)
                form_ration_name = data.get('ration-name')
            else:
                form_ration_name = request.POST.get('ration-name')

            if not form_ration_name:
                return JsonResponse({
                    'success': False,
                    'error': 'ration-name is required'
                }, status=400)

            # Store in session
            request.session['ration-name'] = form_ration_name

            return JsonResponse({
                'success': True,
                'message': 'Ration name stored successfully',
                'data': {
                    'ration_name': form_ration_name
                }
            }, status=200)

        except json.JSONDecodeError:
            return JsonResponse({
                'success': False,
                'error': 'Invalid JSON data'
            }, status=400)
        except Exception as e:
            return JsonResponse({
                'success': False,
                'error': str(e)
            }, status=500)

    # Handle GET request
    stored_ration_name = request.session.get('ration-name')
    return JsonResponse({
        'success': True,
        'message': 'Current ration name retrieved',
        'data': {
            'ration_name': stored_ration_name
        }
    }, status=200)


@csrf_exempt  # Disable CSRF for testing (remove in production)
def ingredient_restructions_func(request):
    if request.method == 'POST':
        try:
            # Handle both JSON and form-data input
            if request.content_type == 'application/json':
                data = json.loads(request.body)
                selected_ingredients = data.get('ingredients', [])
            else:
                selected_ingredients = request.POST.getlist('ingredients[]', [])

            # Validate at least one ingredient was selected
            if not selected_ingredients:
                return JsonResponse({
                    'success': False,
                    'error': 'At least one ingredient must be selected'
                }, status=400)

            # Store in session
            request.session['selected_ingredients'] = selected_ingredients

            return JsonResponse({
                'success': True,
                'message': 'Ingredients stored successfully',
                'data': {
                    'ingredients': selected_ingredients,
                    'count': len(selected_ingredients)
                }
            }, status=200)

        except json.JSONDecodeError:
            return JsonResponse({
                'success': False,
                'error': 'Invalid JSON data'
            }, status=400)
        except Exception as e:
            return JsonResponse({
                'success': False,
                'error': str(e)
            }, status=500)

    # Handle GET request
    try:
        form_ration_name = request.session['ration-name']
        selected_ingredients = request.session.get('selected_ingredients', [])

        return JsonResponse({
            'success': True,
            'data': {
                'ration_name': form_ration_name,
                'ingredients': selected_ingredients,
                'ingredient_display': ', '.join(
                    selected_ingredients) if selected_ingredients else 'No ingredients selected'
            }
        }, status=200)

    except KeyError:
        return JsonResponse({
            'success': False,
            'error': 'Ration name not found in session'
        }, status=400)

@csrf_exempt
def sozdanie_ration_func(request):
    form_ration_name = request.session['ration-name']
    return JsonResponse({'rations': form_ration_name}, safe=False)

def sozdanie_pk_func(request):
    generals = general.objects.all().prefetch_related("ingredients")
    ingredients_list = ingredients.objects.all()
    context = {
        "generals": generals,
        "ingredients": ingredients_list
    }

    if request.method == 'POST':
        ingredient_data = request.POST.get('ingredient_list', '').strip()
        if not ingredient_data:
            context['error'] = 'Список ингредиентов пуст.'

        ingredient_list = [item.split(';') for item in ingredient_data.split('|') if item]

        unique_code = generate_unique_code(composition, 'code')

        composition_name = request.POST.get("name_pc")
        if composition.objects.filter(name=composition_name).exists():
            composition_name = f"{composition_name}_{random.randint(1, 1000)}"

        comp = composition(
            code=unique_code,
            name=composition_name,
            description=request.POST.get("description_pc")
        )
        comp.save()

        context['success'] = 'Композиция успешно создана!'
        return JsonResponse({'context': context}, safe=False)

    return JsonResponse({'success': False, 'error': 'Метод не разрешен'}, status=405)

def sozdanie_ration_for_pk_func(request):
    return render(request,'rationapp/sozdanie_ration_for_pk.html')

def redact_ration_func(request):
    return render(request,'rationapp/redact_ration.html')

@csrf_exempt
def vhod_func(request):
    if request.method == 'POST':
        try:
            if request.content_type == 'application/json':
                data = json.loads(request.body)
                username = data.get('username')
                password = data.get('password')
            else:
                username = request.POST.get('username')
                password = request.POST.get('password')

            if not username or not password:
                return JsonResponse({'success': False, 'error': 'Имя пользователя и пароль обязательны'}, status=400)

            user = authenticate(request, username=username, password=password)
            if user is not None:
                # Создаем или получаем существующий токен для пользователя
                token, created = Token.objects.get_or_create(user=user)
                print(f"Успешная аутентификация пользователя: {username}")
                return JsonResponse({
                    'success': True,
                    'token': token.key,
                    'user_id': user.pk,
                    'username': user.username
                }, status=200)
            else:
                print(f"Ошибка аутентификации: {username}")
                return JsonResponse({'success': False, 'error': 'Неверное имя пользователя или пароль'}, status=401)

        except json.JSONDecodeError:
            return JsonResponse({'success': False, 'error': 'Неверный формат JSON'}, status=400)
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=500)

    return JsonResponse({'success': False, 'error': 'Используйте POST-запрос'}, status=405)

@csrf_exempt
def arhiv_func(request, technologist_id=None):
    if technologist_id:
        rations = ration.objects.filter(technologist__icontains=technologist_id).values()
    else:
        rations = ration.objects.all().values()
    rations_list = list(rations)
    return JsonResponse({'rations': rations_list}, safe=False)

def arhiv_koncretnogo_techn_func(request):
    return render(request,'rationapp/arhiv_koncretnogo_techn.html')