import { RegisterRequest } from './dto/register.request.js';
import { AuthUtils } from '../../utils/auth.utils.js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterHandler {
  constructor(private readonly authService: AuthUtils) {}

  async Handle(registerRequest: RegisterRequest): Promise<string> {
    // Call the hashPassword method from AuthService
    var hashedPassword = this.authService.hashPassword(
      registerRequest.Password,
    );
    return `Registration successful for user: ${registerRequest.Email}`;
  }
}
