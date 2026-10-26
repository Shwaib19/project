import { LoginRequest } from './dto/login.request.js';
import { AuthUtils } from '../../utils/auth.utils.js';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class LoginHandler {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly authService: AuthUtils,
  ) {}

  async handle(Request: LoginRequest): Promise<string> {
    // Verify if password and Email existe for an user in the database
    const user = await this.userRepository.findOne({
      where: {
        Email: Request.Email,
      },
    });

    if (!user) {
      return `Invalid email or password`; 
    }

    const isPasswordValid = await this.authService.verifyPassword(
      Request.Password,
      user.Password,
    );

    if (!isPasswordValid) {
      return `Invalid email or password`;
    }

    // still need to add logic to check if the user exists and return appropriate response
    return `Login successful for user: ${Request.Email}`;
  }
}
