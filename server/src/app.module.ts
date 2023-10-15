import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entitys/users.entity';
import { SuperAdminModule } from './super_admin/super_admin.module';
import { ClientModule } from './client/client.module';
import { CustomerModule } from './customer/customer.module';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { ProductInventoryModule } from './product_inventory/product_inventory.module';
import { ProductInventory } from './product_inventory/entites/product_inventory.entity';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MY_SQL_HOST,
      port: parseInt(process.env.MY_SQL_POST),
      username: process.env.MY_SQL_USERNAME,
      password: process.env.MY_SQL_PASSWORD,
      database: process.env.MY_SQL_DATABASE,
      entities: [User, Category, Product, ProductInventory],
      synchronize: true,
    }),
    UserModule,
    SuperAdminModule,
    ClientModule,
    CustomerModule,
    CategoryModule,
    ProductModule,
    ProductInventoryModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
