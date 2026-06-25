import { Body, Controller, Get, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { SendMessageDto } from './dto/send-message.dto';
import { MessageService } from './message.service';

@UseGuards(JwtAuthGuard)
@Controller('message')
export class MessageController {
    constructor(
        private readonly messageService: MessageService,
    ) {}

    @Post('send')
    send(@Req() req: any, @Body() dto: SendMessageDto) {
        return this.messageService.sendMessage(req.user.id, dto.receiverId, dto.content);
    }

    @Get('conversation/:otherUserId')
    conversation(@Req() req: any, @Param('otherUserId', ParseIntPipe) otherUserId: number) {
        return this.messageService.getConversation(req.user.id, otherUserId);
    }
}
