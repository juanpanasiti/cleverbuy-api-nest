import { Injectable, BadRequestException } from '@nestjs/common';
import { LoginData } from '../../dist/interfaces/auth.interfaces';

@Injectable()
export class AuthService {
    login(payload: LoginData) {
        const { email, password } = payload;
        if (!email || !password) {
            throw new BadRequestException('Email and password are required', 'email_or_password_missed');
        }
        return payload;
    }
}
