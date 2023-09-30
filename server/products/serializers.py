from rest_framework import serializers

from product_inventorys.serializers import ProductInventorySerializer
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    # product_inventorys = ProductInventorySerializer(many=True)

    class Meta:
        model = Product
        fields = '__all__'
