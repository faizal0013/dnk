from django.db import models

from users.models import User
from categorys.models import Category


class Product(models.Model):
    product_image = models.ImageField(upload_to='products/')
    product_name = models.TextField()
    product_price = models.DecimalField(max_digits=19, decimal_places=2)
    is_sale = models.BooleanField(default=True)
    sale_price = models.DecimalField(
        max_digits=19, decimal_places=2, null=True, blank=True
    )
    user_id = models.ForeignKey(
        User, blank=False, null=False, on_delete=models.CASCADE,
        default=None
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.PROTECT,
        default=None
    )

    def __str__(self) -> str:
        return self.product_name
