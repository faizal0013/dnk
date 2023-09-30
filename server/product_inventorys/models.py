from django.db import models

from products.models import Product


class ProductInventory(models.Model):
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name='inventory_items'
    )
    product_color = models.CharField(max_length=7)
    product_qty = models.IntegerField()

    def __str__(self) -> str:
        return f"Inventory for {self.product.product_name} ({self.product_qty} units) - Color: {self.product_color}"
