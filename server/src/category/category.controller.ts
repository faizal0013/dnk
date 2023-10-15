import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('api/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoryService.createCategory(createCategoryDto);
  }

  @Get()
  async findAllCategory() {
    return await this.categoryService.findAllCategory();
  }

  @Get(':id')
  async findOneCategory(@Param('id', ParseIntPipe) id: number) {
    return await this.categoryService.findOneCategory(id);
  }

  @Patch(':id')
  async updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.categoryService.updateCategory(id, updateCategoryDto);
  }

  @Delete(':id')
  async removeCategory(@Param('id', ParseIntPipe) id: number) {
    return await this.categoryService.removeCategory(id);
  }
}
