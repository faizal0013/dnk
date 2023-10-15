import { Module } from '@nestjs/common';
import { SuperAdminController } from './super_admin.controller';
import { SuperAdminService } from './super_admin.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [SuperAdminController],
  providers: [SuperAdminService],
})
export class SuperAdminModule {}
