import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/create-user.dto';
import { ClientService } from './client.service';
import { LoginDto } from 'src/user/dtos/login.dto';

@Controller('api/client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('/register')
  async registerClient(@Body() registerData: CreateUserDto) {
    return await this.clientService.registerClient(registerData);
  }

  @Post('/login')
  async loginClient(@Body() loginData: LoginDto) {
    return await this.clientService.loginClient(loginData);
  }
}
