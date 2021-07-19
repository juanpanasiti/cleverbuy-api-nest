import { Controller, Post, Body } from '@nestjs/common';

import { LoginResponse } from '../../dist/interfaces/responses.interfaces';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    login(@Body() payload: any): LoginResponse {
        const { user, password } = payload;

        const responseData = this.authService.login({ email: user, password });

        const response: LoginResponse = {
            responseData,
            token: '',
        };

        return response;
    }
}
