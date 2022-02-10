from django.urls import path
from . import views

urlpatterns = [
    path('' , views.history ,name='history'),
    path('history_detail/' , views.history_detail ,name='history_detail'),
    
]