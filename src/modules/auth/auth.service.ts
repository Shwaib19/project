import { Injectable } from '@nestjs/common';
import * as bc from 'bcrypt';

@Injectable()
export class AuthService {
    
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bc.hash(password, saltRounds);
    return hashedPassword;
  }

  async verifyPassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    const isMatch = await bc.compare(password, hashedPassword);
    return isMatch;
  }
}
