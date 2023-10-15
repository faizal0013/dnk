import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CategoryModule } from 'src/category/category.module';
import { UserModule } from 'src/user/user.module';
import { ProductInventoryModule } from 'src/product_inventory/product_inventory.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    CategoryModule,
    UserModule,
    ProductInventoryModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
