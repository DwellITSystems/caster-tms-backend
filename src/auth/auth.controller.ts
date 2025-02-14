import { Body, Controller, Options, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { createAuthDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Options('*')
    handlePreflight() {
        return;
    }

    @Post('register')
    register(@Body() dto: createAuthDto) {
        return this.authService.register(dto);
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
