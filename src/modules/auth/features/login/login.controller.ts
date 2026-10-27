import { Body, Controller, Post } from '@nestjs/common';
import { LoginRequest } from './dto/login.request.js';
import { LoginHandler } from './login.handler.js';

@Controller()
export class LoginController {
  constructor(private readonly loginHandler: LoginHandler) {}

  @Post('/login')
  async Login(@Body() loginRequest: LoginRequest): Promise<string> {
    return await this.loginHandler.handle(loginRequest);
  }
}
