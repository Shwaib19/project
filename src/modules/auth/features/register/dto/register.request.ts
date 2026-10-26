import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';
export class RegisterRequest {
  @MaxLength(20)
  @IsNotEmpty()
  FirstName: string;

  @IsNotEmpty()
  @MaxLength(20)
  LastName: string;

  @IsEmail()
  @MaxLength(30)
  Email: string;

  @IsNotEmpty()
  Password: string;
}
