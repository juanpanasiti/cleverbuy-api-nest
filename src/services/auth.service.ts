import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class AuthService {
    login(payload: any) {
        const { email, password } = payload;
        if (!email || !password) {
            throw new BadRequestException('Email and password are required', 'email_or_password_missed');
        }
        return payload;
    }
}
