import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { FriendRequestService } from './friend-request.service';
import { SendRequestDto } from './dto/send-request.dto';
import { AcceptRequestDto } from './dto/accept-request.dto';
import { RejectRequestDto } from './dto/reject-request.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('friend-request')
export class FriendRequestController {

    constructor(
        private readonly friendRequestService: FriendRequestService
    ){}

    @Post('send')
    send(@Req() req: any, @Body() sendRequestDto: SendRequestDto){

        return this.friendRequestService.sendRequest(req.user.id, sendRequestDto.receiverId)
    }

    @Post('accept')
    accept(@Req() req: any, @Body() acceptRequestDto: AcceptRequestDto){

        return this.friendRequestService.acceptRequest(acceptRequestDto.requestId, req.user.id)
    }

    @Post('reject')
    reject(@Req() req: any, @Body() rejectRequestDto: RejectRequestDto){

        return this.friendRequestService.rejectRequest(rejectRequestDto.requestId, req.user.id)
    }

    @Get('pending')
    pending(@Req() req: any){

        return this.friendRequestService.pendingRequests(req.user.id)
    }

    @Get('friends')
    friends(@Req() req: any){

        return this.friendRequestService.friends(req.user.id)
    }
}
