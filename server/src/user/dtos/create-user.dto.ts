import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  fullName: string;

  @IsString()
  phoneNumber: string;

  @IsEmail()
  email: string;

  @IsString()
  address: string;

  @IsString()
  password: string;
}
