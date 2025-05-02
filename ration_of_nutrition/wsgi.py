import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ration_of_nutrition.settings')

application = get_wsgi_application()
