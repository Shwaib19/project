import { Module } from '@nestjs/common';
import { LoginController } from './features/login/login.controller.js';
import { RegisterController } from './features/register/register.controller.js';
import { LoginHandler } from './features/login/login.handler.js';
import { RegisterHandler } from './features/register/register.handler.js';
import { AuthUtils } from './utils/auth.utils.js';

@Module({
  imports: [],
  controllers: [LoginController, RegisterController],
  providers: [LoginHandler, RegisterHandler, AuthUtils],
})
export class AuthModule {}
