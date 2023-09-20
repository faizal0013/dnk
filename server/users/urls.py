from django.urls import path

from . import views

urlpatterns = [
    path('register/', views.register_api_view, name='user-register'),
    path('login/', views.LoginApiView.as_view(), name='user-login'),
]
