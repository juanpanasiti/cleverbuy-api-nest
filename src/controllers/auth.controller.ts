import { Controller, Post, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthService } from '../services/auth.service';

@ApiBearerAuth()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @ApiOperation({ summary: 'Login a user' })
    @ApiResponse({ status: 400, description: 'BadRequest.' })
    login(@Body() payload: any) {
        const { user, password } = payload;

        const responseData = this.authService.login({ email: user, password });

        const response = {
            responseData,
            token: '',
        };

        return response;
    }
}
