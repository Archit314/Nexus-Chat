import { Module } from '@nestjs/common';
import { FriendRequestService } from './friend-request.service';
import { FriendRequestController } from './friend-request.controller';
import { UserModule } from 'src/user/user.module';
import { FriendRequest } from './friendRequest.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([FriendRequest]),
        UserModule
    ],
  providers: [FriendRequestService],
  controllers: [FriendRequestController]
})
export class FriendRequestModule {}
