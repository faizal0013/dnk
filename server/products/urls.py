from django.urls import path

from . import views


urlpatterns = [
    # path('product/', views.ListCreateProductAPIView.as_view(),
    #      name='list-product',),
    path('product/', views.ProductCreateWithInventoryView.as_view(),
         name='list-product',),
    path('product/<int:pk>/', views.ProductRetrieveUpdateDestroyAPIView.as_view()),
]
