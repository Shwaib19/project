import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginRequest {
  @IsEmail()
  Email: string;

  @IsNotEmpty()
  Password: string;
}
