import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { createUserDto } from 'src/users/dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('register')
    register(@Body() createUserDto: createUserDto) {
        return this.authService.register(createUserDto);
    }

    @Post('login')
    async login(@Body() body) {
        return this.authService.login(body);
    }

    @Post('verify-mfa')
    async verifyMFA(@Body() body: { userId: string; token: string }) {
        return this.authService.verifyMFA(body.userId, body.token);
    }

    @Post('setup-mfa')
    async setupMFA(@Body() body: { userId: string }) {
        return this.authService.setupMFA(body.userId);
    }
}
