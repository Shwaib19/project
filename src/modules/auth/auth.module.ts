import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity.js';
import { LoginController } from './features/login/login.controller.js';
import { LoginHandler } from './features/login/login.handler.js';
import { RegisterController } from './features/register/register.controller.js';
import { RegisterHandler } from './features/register/register.handler.js';
import { AuthUtils } from './utils/auth.utils.js';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [LoginController, RegisterController],
  providers: [LoginHandler, RegisterHandler, AuthUtils],
})
export class AuthModule {}
