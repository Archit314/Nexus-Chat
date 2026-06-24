import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { FriendRequestService } from './friend-request.service';
import { SendRequestDto } from './dto/send-request.dto';
import { AcceptRequestDto } from './dto/accept-request.dto';
import { RejectRequestDto } from './dto/reject-request.dto';

@Controller('friend-request')
export class FriendRequestController {

    constructor(
        private readonly friendRequestService: FriendRequestService
    ){}

    @Post('send')
    send(@Body() sendRequestDto: SendRequestDto){

        return this.friendRequestService.sendRequest(sendRequestDto.senderId, sendRequestDto.receiverId)
    }

    @Post('accept')
    accept(@Body() acceptRequestDto: AcceptRequestDto){
        
        return this.friendRequestService.acceptRequest(acceptRequestDto.requestId, acceptRequestDto.userId)
    }
    
    @Post('reject')
    reject(@Body() rejectRequestDto: RejectRequestDto){

        return this.friendRequestService.rejectRequest(rejectRequestDto.requestId, rejectRequestDto.userId)
    }

    @Get('pending/:userId')
    pending(@Param('userId', ParseIntPipe) userId: number){

        return this.friendRequestService.pendingRequests(userId)
    }

    @Get('friends/:userId')
    friends(@Param('userId', ParseIntPipe) userId: number){

        return this.friendRequestService.friends(userId)
    }
}
