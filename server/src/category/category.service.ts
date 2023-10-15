import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async createCategory(data: Partial<Category>) {
    const isExist = await this.findCategoryByName(data.categoryName);

    if (isExist) {
      throw new ConflictException(
        `Category ${data.categoryName}. This record already exists.`,
      );
    }

    const categoryCreate = this.categoryRepository.create(data);

    return {
      message: 'Category created successfully',
      result: await this.categoryRepository.save(categoryCreate),
    };
  }

  async findAllCategory() {
    return this.categoryRepository.find();
  }

  async findOneCategory(id: number) {
    const category = await this.findCategoryById(id);

    return {
      result: category,
    };
  }

  async updateCategory(id: number, updateCategoryDto: Partial<Category>) {
    const category = await this.findCategoryById(id);

    Object.assign(category, updateCategoryDto);

    return {
      message: 'Category updated successfully',
      result: await this.categoryRepository.save(category),
    };
  }

  async removeCategory(id: number) {
    const category = await this.findCategoryById(id);

    return {
      message: 'Category deleted successfully',
      result: await this.categoryRepository.remove(category),
    };
  }

  async findCategoryById(id: number) {
    try {
      return await this.categoryRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findCategoryByName(name: string) {
    return await this.categoryRepository.findOneBy({ categoryName: name });
  }
}
