
from django.urls import path
from . import views

urlpatterns = [
    path('problem/',views.problem),
    path('problem/<int:id>/',views.problem_details),
    
]
