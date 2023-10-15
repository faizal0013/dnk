import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../enums/role.enums';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'full_name', nullable: false })
  fullName: string;

  @Column({
    type: 'varchar',
    name: 'phone_number',
    nullable: false,
    length: 10,
  })
  phoneNumber: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({ type: 'text', nullable: false })
  address: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'bool', nullable: false, name: 'is_active', default: true })
  isActive: boolean;

  @Column({ type: 'enum', nullable: false, enum: Role })
  role: Role;

  @OneToMany(() => Product, (product: Product) => product.user)
  product: Product[];
}
