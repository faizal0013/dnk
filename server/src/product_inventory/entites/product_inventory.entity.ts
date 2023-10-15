import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ProductInventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, name: 'product_color' })
  productColor: string;

  @Column({ type: 'bigint', nullable: false, name: 'product_qty' })
  productQty: number;

  @ManyToOne(() => Product, (product: Product) => product.productInventory, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
