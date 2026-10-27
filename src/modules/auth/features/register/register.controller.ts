import { Body, Controller, Post } from '@nestjs/common';
import { RegisterHandler } from './register.handler.js';
import { RegisterRequest } from './dto/register.request.js';

@Controller()
export class RegisterController {
  constructor(private readonly registerHandler: RegisterHandler) {}

  @Post('/register')
  async Register(@Body() registerRequest: RegisterRequest): Promise<string> {
    return await this.registerHandler.Handle(registerRequest);
  }
}
