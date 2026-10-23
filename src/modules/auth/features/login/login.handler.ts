import { LoginRequest } from './dto/login.request.js';
import { AuthUtils } from '../../utils/auth.utils.js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginHandler {
  constructor(private readonly authService: AuthUtils) {}

  async handle(loginRequest: LoginRequest): Promise<string> {
    // Call the verifyPassword method from AuthService
    await this.authService.verifyPassword(
      loginRequest.Password,
      'hashedPassword',
    );

    // still need to add logic to check if the user exists and return appropriate response
    return `Login successful for user: ${loginRequest.Email}`;
  }
}
