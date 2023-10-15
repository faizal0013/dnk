import { Category } from 'src/category/entities/category.entity';
import { ProductInventory } from 'src/product_inventory/entites/product_inventory.entity';
import { User } from 'src/user/entitys/users.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, name: 'product_name' })
  productName: string;

  @Column({ type: 'varchar', nullable: false, name: 'product_image' })
  productImage: string;

  @Column({ type: 'decimal', nullable: false, name: 'product_price' })
  productPrice: string;

  @Column({ type: 'bool', nullable: false, default: false, name: 'is_sale' })
  isSale: boolean;

  @Column({ type: 'decimal', nullable: true, name: 'sale_price' })
  salePrice: string;

  @ManyToOne(() => User, (user: User) => user.product, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Category, (category: Category) => category.product, {
    onDelete: 'RESTRICT',
    nullable: false,
  })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(
    () => ProductInventory,
    (productInventory: ProductInventory) => productInventory.product,
  )
  productInventory: ProductInventory[];
}
