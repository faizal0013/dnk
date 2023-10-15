import { Body, Controller, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateUserDto } from 'src/user/dtos/create-user.dto';
import { LoginDto } from 'src/user/dtos/login.dto';

@Controller('api/customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('/register')
  async registerCustomer(@Body() registerData: CreateUserDto) {
    return await this.customerService.registerCustomer(registerData);
  }

  @Post('/login')
  async loginCustomer(@Body() loginData: LoginDto) {
    return await this.customerService.loginCustomer(loginData);
  }
}
