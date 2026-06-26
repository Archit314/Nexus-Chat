import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Get('profile')
    getProfile(@Req() req: any) {
        return this.userService.findById(req.user.id);
    }

    @Get('search')
    search(@Req() req: any, @Query('q') query: string) {
        return this.userService.search(query, req.user.id);
    }
}
