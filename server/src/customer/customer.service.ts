import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/user/dtos/login.dto';
import { User } from 'src/user/entitys/users.entity';
import { Role } from 'src/user/enums/role.enums';
import { UserService } from 'src/user/user.service';

@Injectable()
export class CustomerService {
  constructor(private readonly userService: UserService) {}

  async registerCustomer(userData: Partial<User>) {
    return this.userService.register(userData, Role.Customer);
  }

  async loginCustomer(loginData: LoginDto) {
    return this.userService.login(loginData);
  }
}
