import { Controller, Post } from '@nestjs/common';
import { LoginRequest } from './dto/login.request.js';
import { AuthService } from '../../auth.service.js';

@Controller()
export class LoginController {
  constructor( private readonly authService: AuthService ) {}

  @Post('/login')
  async Login(loginRequest: LoginRequest): Promise<string> {


    // Call the verifyPassword method from AuthService
    await this.authService.verifyPassword(loginRequest.Password, 'hashedPassword');

    // still need to add logic to check if the user exists and return appropriate response
    return `Login successful for user: ${loginRequest.Email}`;
  }
}
