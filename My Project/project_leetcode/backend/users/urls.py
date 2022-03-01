from django.urls import path
from . import views

urlpatterns = [
    path('users_data/',views.users_data),
    path('users_data/<int:id>/',views.users_update_delete),
    path('login/',views.login, name="login"),
    
    
]