import { Controller, Post } from '@nestjs/common';
import { RegisterRequest } from './dto/register.request.js';
import { AuthService } from '../../auth.service.js';

@Controller()
export class RegisterController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  Register(registerRequest: RegisterRequest): string {
    // Call the hashPassword method from AuthService
    var hashedPassword = this.authService.hashPassword(registerRequest.Password);
    return `Registration successful for user: ${registerRequest.Email}`;
  }
}
