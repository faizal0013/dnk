import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/user/dtos/login.dto';
import { User } from 'src/user/entitys/users.entity';
import { Role } from 'src/user/enums/role.enums';
import { UserService } from 'src/user/user.service';

@Injectable()
export class SuperAdminService {
  constructor(private readonly userService: UserService) {}

  async registerSuperAdmin(userData: Partial<User>) {
    return this.userService.register(userData, Role.SuperAdmin);
  }

  async loginSuperAdmin(loginData: LoginDto) {
    return this.userService.login(loginData);
  }
}
