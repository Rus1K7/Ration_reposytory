"""
URL configuration for ration_of_nutrition project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rationapp.views import (
    vhod_func, arhiv_func, arhiv_koncretnogo_techn_func, glav_techn_func,
    bas_inf_about_ration_func, registration_func, restrictions_func,
    medical_restrictions_func, religion_restrictions_func, ingredient_restructions_func,
    sozdanie_ration_func, sozdanie_pk_func, sozdanie_ration_for_pk_func, redact_ration_func,
    delete_ration
)




urlpatterns = [
    path('admin/', admin.site.urls),
    path('', vhod_func, name='vhod'),
    path('vhod/', vhod_func, name='vhod'),
    path('arhiv/', arhiv_func, name='arhiv'),
    path('arhiv/<int:technologist_id>/', arhiv_func, name='arhiv_technologist'),
    path('main/', glav_techn_func, name='main'),
    path('ration/', bas_inf_about_ration_func, name='ration'),
    path('ration/registration/', registration_func, name='registration'),
    path('registration/', registration_func, name='registration'),
    path('ration/restrictions/medical/', medical_restrictions_func, name='medical_restrictions'),
    path('ration/restrictions/religion/', religion_restrictions_func, name='religion_restrictions'),
    path('ration/restrictions/ingredients/', ingredient_restructions_func, name='ingredient_restrictions'),
    # создание питания
    path('pk/create/', sozdanie_pk_func, name='create_pk'),
    path('ration/create/for_pk/', sozdanie_ration_for_pk_func, name='create_ration_for_pk'),
    path('ration/redact/', redact_ration_func, name='redact_ration'),

    # удаление рациона
    path('ration/delete/<int:ration_id>/', delete_ration, name='delete_ration'),
    # главная страница
    path('main/ration/', bas_inf_about_ration_func, name='main_ration'),
    # ограничения
    path('ration/restrictions/', restrictions_func, name='restrictions'),
    # ограничения по ингредиентам
    path('ration/restrictions/ingredient_restructions/', ingredient_restructions_func, name='ingredient_restrictions'),
    # ограничения по медицинским показаниям
    path('ration/restrictions/medical_restrictions/', medical_restrictions_func, name='medical_restrictions'),
    # ограничения по религиозным показаниям
    path('ration/restrictions/religion_restrictions/', religion_restrictions_func, name='religion_restrictions'),
    path('ration/sozdanie/', sozdanie_ration_func, name='sozdanie_ration'),
]