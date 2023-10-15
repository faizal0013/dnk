import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateProductInventoryDTO } from 'src/product_inventory/dto/create-product_inventory.dto';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsDecimal({ decimal_digits: '2' })
  @IsNotEmpty()
  productPrice: string;

  @IsBoolean()
  @IsOptional()
  isSale?: boolean;

  @IsDecimal({ decimal_digits: '2' })
  @IsOptional()
  salePrice?: string;

  @IsNumber()
  @IsNotEmpty()
  categoryId: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProductInventoryDTO)
  productInventorys: CreateProductInventoryDTO[];
}
