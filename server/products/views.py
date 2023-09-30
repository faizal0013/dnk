import json
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework import status
from rest_framework.response import Response
from rest_framework.request import Request

from .models import Product
from .serializers import ProductSerializer
from product_inventorys.serializers import ProductInventorySerializer

from .permissions import IsOwnerOrReadOnly


class ProductCreateWithInventoryView(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def create(self, request: Request, *args, **kwargs):

        product_data = request.data.dict()

        product_serializer = self.get_serializer(data=product_data)

        product_serializer.is_valid(raise_exception=True)

        product_instance = product_serializer.save(user=request.user)

        product_inventorys_json = product_data.pop('product_inventorys', '[]')

        product_inventorys = json.loads(product_inventorys_json)

        inventories = [
            {
                'product': product_instance.id,
                **item_data
            } for item_data in product_inventorys
        ]

        product_inventory_serializer = ProductInventorySerializer(
            data=inventories, many=True
        )

        product_inventory_serializer.is_valid(raise_exception=True)

        product_inventory_serializer.save()

        return Response({
            "product": {
                "id": product_serializer.data.get('id'),
                "user": product_serializer.data.get('user'),
                "product_image": product_serializer.data.get('product_image'),
                "product_name": product_serializer.data.get('product_name'),
                "product_price": product_serializer.data.get('product_price'),
                "is_sale": product_serializer.data.get('is_sale'),
                "sale_price": product_serializer.data.get('sale_price'),
                "category": product_serializer.data.get('category'),
                "product_inventorys": product_inventory_serializer.data
            }
        }, status=status.HTTP_201_CREATED)


class ProductRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsOwnerOrReadOnly,]
