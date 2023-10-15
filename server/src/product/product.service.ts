import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CategoryService } from 'src/category/category.service';
import { UserService } from 'src/user/user.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductInventoryService } from 'src/product_inventory/product_inventory.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly categoryService: CategoryService,
    private readonly userService: UserService,
    private readonly productInventoryService: ProductInventoryService,
  ) {}

  async createProduct(productData: CreateProductDto) {
    const { categoryId, productInventorys, ...extraData } = productData;

    const category = await this.categoryService.findCategoryById(categoryId);

    const user = await this.userService.findUserById(6);

    const createProduct = this.productRepository.create({
      ...extraData,
      category,
      productImage: '',
      user: user,
    });

    const productResult = await this.productRepository.save(createProduct);

    const productInventoryResults = await Promise.all(
      productInventorys.map(async (productInventory) => {
        return await this.productInventoryService.createProductInventory({
          ...productInventory,
          product: productResult,
        });
      }),
    );

    return {
      message: 'Product Created Successfully',
      result: {
        ...productResult,
        productInventorys: productInventoryResults,
      },
    };
  }

  async findAllProducts() {
    const product = await this.productRepository.find({
      relations: ['category'],
    });

    return {
      result: product,
    };
  }

  async findOneProduct(id: number) {
    const product = await this.findProductById(id);

    return {
      result: product,
    };
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.findProductById(id);

    Object.assign(product, updateProductDto);

    return {
      message: 'Product Updated Successfully',
      result: await this.productRepository.save(product),
    };
  }

  async removeProduct(id: number) {
    const product = await this.findProductById(id);

    return {
      message: 'Product Updated Successfully',
      result: await this.productRepository.remove(product),
    };
  }

  async findProductById(id: number) {
    try {
      return await this.productRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
