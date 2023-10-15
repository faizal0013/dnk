import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
    name: 'category_name',
  })
  categoryName: string;

  @OneToMany(() => Product, (product: Product) => product.category)
  product: Product[];
}
