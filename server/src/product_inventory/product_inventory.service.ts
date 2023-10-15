import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductInventory } from './entites/product_inventory.entity';
import { Repository } from 'typeorm';
import { CreateProductInventoryDTO } from './dto/create-product_inventory.dto';

@Injectable()
export class ProductInventoryService {
  constructor(
    @InjectRepository(ProductInventory)
    private readonly productInventoryRepository: Repository<ProductInventory>,
  ) {}

  async createProductInventory(
    createProductInventoryDTO: CreateProductInventoryDTO,
  ) {
    const productInventory = await this.productInventoryRepository.create(
      createProductInventoryDTO,
    );

    return await this.productInventoryRepository.save(productInventory);
  }
}
