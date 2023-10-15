import { Module } from '@nestjs/common';
import { ProductInventoryController } from './product_inventory.controller';
import { ProductInventoryService } from './product_inventory.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductInventory } from './entites/product_inventory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductInventory])],
  controllers: [ProductInventoryController],
  providers: [ProductInventoryService],
  exports: [ProductInventoryService],
})
export class ProductInventoryModule {}
