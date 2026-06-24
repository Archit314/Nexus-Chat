import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FriendRequest } from './friendRequest.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class FriendRequestService {

    constructor(
        @InjectRepository(FriendRequest)
        private readonly friendRequestRepository: Repository<FriendRequest>,
        private readonly userService: UserService
    ){}

    async sendRequest(senderId: number, receiverId: number){

        if(senderId === receiverId){
            throw new ConflictException('You cannot send a friend request to yourself')
        }

        const existingReceiver = await this.userService.findById(receiverId)
        if(!existingReceiver){
            throw new NotFoundException('Receiver not found')
        }

        const existingRequest = await this.friendRequestRepository.findOne({
            where: [
                {senderId, receiverId},
                {senderId: receiverId, receiverId: senderId}
            ]
        })

        if(existingRequest && existingRequest.status === 'pending'){
            throw new ConflictException('Friend request already exists')
        }

        if(existingRequest && existingRequest.status === 'accepted'){
            throw new ConflictException('You are already friends')
        }

        const newRequest = this.friendRequestRepository.create({ senderId, receiverId})
        return this.friendRequestRepository.save(newRequest)
    }

    async acceptRequest(requestId: number, userId: number){

        const existingRequest = await this.friendRequestRepository.findOne({
            where: { id: requestId, receiverId: userId, status: 'pending'}
        })

        if(!existingRequest){
            throw new NotFoundException('Friend request not found')
        }
        
        existingRequest.status = 'accepted'
        return this.friendRequestRepository.save(existingRequest)
    }

    async rejectRequest(requestId: number, userId: number){

        const existingRequest = await this.friendRequestRepository.findOne({
            where: { id: requestId, receiverId: userId, status: 'pending'}
        })

        if(!existingRequest){
            throw new NotFoundException('Friend request not found')
        }
        
        existingRequest.status = 'rejected'
        return this.friendRequestRepository.save(existingRequest)
    }

    async pendingRequests(userId: number){

        return this.friendRequestRepository.find({
            where: { receiverId: userId, status: 'pending'},
            relations: {sender: true, receiver: true},
            order: {createdAt: 'DESC'}
        })
    }

    async friends(userId: number){

        const acceptedRequests = await this.friendRequestRepository.find({
            where: [
                {senderId: userId, status: 'accepted'},
                {receiverId: userId, status: 'accepted'}
            ],
            relations: {sender: true, receiver: true}
        })

        return acceptedRequests.map(request => request.senderId === userId ? request.receiver : request.sender)
    }
    
}
