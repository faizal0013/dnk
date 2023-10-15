import { Body, Controller, Post } from '@nestjs/common';
import { SuperAdminService } from './super_admin.service';
import { CreateUserDto } from 'src/user/dtos/create-user.dto';
import { LoginDto } from 'src/user/dtos/login.dto';

@Controller('api/super-admin')
export class SuperAdminController {
  constructor(private readonly superAdminService: SuperAdminService) {}

  @Post('/register')
  async registerSuperAdmin(@Body() registerData: CreateUserDto) {
    return await this.superAdminService.registerSuperAdmin(registerData);
  }

  @Post('/login')
  async loginSuperAdmin(@Body() loginData: LoginDto) {
    return await this.superAdminService.loginSuperAdmin(loginData);
  }
}
