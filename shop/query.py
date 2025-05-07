from django.db.models import QuerySet
from django.db.models.expressions import Window, F
from django.db.models.functions import RowNumber, Random


class ProductQuerySet(QuerySet):
    """
    Custom QuerySet for the Product model.

    This manager provides a method to get a random product for each shop.
    The method uses the RowNumber window function to assign a rank to each product
    within its shop, and then filters to get the first product for each shop.
    """

    def random_product_for_each_shop(self):
        """
        Returns a random product for each shop.

        This is done by annotating each product with a rank based on a random order,
        and then filtering to get the first product for each shop.
        """
        return self.annotate(
            rank=Window(
                expression=RowNumber(),
                partition_by=F('category__shop__id'),
                order_by=Random()
            )
        ).filter(
            rank=1
        )
