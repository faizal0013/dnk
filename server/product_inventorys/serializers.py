from rest_framework import serializers

from .models import ProductInventory


class ProductInventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductInventory
        fields = '__all__'
