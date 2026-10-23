import { Module } from '@nestjs/common';
import { LoginController } from './features/login/login.controller.js';
import { RegisterController } from './features/register/register.controller.js';
import { AuthService } from './auth.service.js';

@Module({
  imports: [],
  controllers: [LoginController, RegisterController],
  providers: [AuthService],
})
export class AuthModule {}
