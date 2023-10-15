import * as bcrypt from 'bcrypt';

import {
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entitys/users.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dtos/login.dto';
import { Role } from './enums/role.enums';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { RefreshTokenDto } from './dtos/refresh-token.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(userData: Partial<User>, role: Role) {
    const saltOrRounds = 13;
    const { password, email, ...extraUserData } = userData;

    const isExist = await this.findUserByEmail(email);

    if (isExist) {
      throw new ConflictException(`${email} already exists`);
    }

    const hashPassword = await bcrypt.hash(password, saltOrRounds);

    const finalData = { ...extraUserData, role, password: hashPassword, email };

    const createData = this.userRepository.create(finalData);

    const saveData = await this.userRepository.save(createData);

    const payload = {
      id: saveData.id,
      email: saveData.email,
      role: saveData.role,
    };

    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRESIN,
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRESIN,
    });

    return {
      message: `${role} is Create successful`,
      access_token: accessToken,
      refresh_token: refreshToken,
      result: {
        fullName: saveData.fullName,
        phoneNumber: saveData.phoneNumber,
        email: saveData.email,
        address: saveData.address,
      },
    };
  }

  async login(loginData: LoginDto) {
    const { email, password } = loginData;

    const user = await this.findUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException({
        message: 'Invalid Credentials',
        status: 'Invalid Credentials',
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException({
        message: 'Invalid Credentials',
        status: 'Invalid Credentials',
      });
    }

    if (!user.isActive) {
      throw new ForbiddenException();
    }

    const payload = { sub: user.id, email: user.email, role: user.role };

    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRESIN,
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRESIN,
    });

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      result: {
        fullName: user.fullName,
        phoneNumber: user.phoneNumber,
        email: user.email,
        address: user.address,
      },
    };
  }

  async findUserByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }

  async findUserById(id: number) {
    try {
      return await this.userRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async refreshAccessToken(refreshTokenDto: RefreshTokenDto) {
    try {
      const verifiedToken = await this.jwtService.verifyAsync(
        refreshTokenDto.refreshToken,
      );

      const user = await this.findUserById(verifiedToken.sub);

      const payload = { sub: user.id, email: user.email, role: user.role };

      const accessToken = await this.jwtService.signAsync(payload, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRESIN,
      });

      return {
        message: 'Refresh Token successfully',
        access_token: accessToken,
      };
    } catch (error) {
      if (error?.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Refresh Token is expired');
      }

      throw new InternalServerErrorException('Some thing is wrong');
    }
  }
}
