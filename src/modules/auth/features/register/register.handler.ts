import { RegisterRequest } from './dto/register.request.js';
import { AuthUtils } from '../../utils/auth.utils.js';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterHandler {
  constructor(
    @InjectRepository(User) // Inject the User repository
    private readonly userRepository: Repository<User>, // auto-create the userRepository property
    private readonly authService: AuthUtils,
  ) {}

  async Handle(registerRequest: RegisterRequest): Promise<string> {
    // Check if the user already exists
    const existingUser = await this.userRepository.exists({
      where: { Email: registerRequest.Email },
    });

    if (existingUser) {
      return `User with email ${registerRequest.Email} already exists`;
    }

    // Call the hashPassword method from AuthService
    var hashedPassword = await this.authService.hashPassword(
      registerRequest.Password,
    );

    // Create a new user with the hashed password
    const newUser = this.userRepository.create({
      FirstName: registerRequest.FirstName,
      LastName: registerRequest.LastName,
      Email: registerRequest.Email,
      Password: hashedPassword,
    });
    // Save the new user to the database
    const user = await this.userRepository.save(newUser);

    //letter add jwt token generation logic here if needed

    return `Registration successful for user: ${user.Email}, with ID: ${user.Id}`;
  }
}
