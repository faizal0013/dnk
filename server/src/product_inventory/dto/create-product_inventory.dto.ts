import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { Product } from 'src/product/entities/product.entity';

export class CreateProductInventoryDTO {
  @Expose()
  product: Product;

  @IsString()
  productColor: string;

  @IsNumber()
  productQty: number;
}
