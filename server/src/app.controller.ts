import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user/user.service';
import { RefreshTokenDto } from './user/dtos/refresh-token.dto';

@Controller('api')
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Post('refresh')
  async refreshAccessToken(@Body() refreshTokenDto: RefreshTokenDto) {
    return await this.userService.refreshAccessToken(refreshTokenDto);
  }
}
