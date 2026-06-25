import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './message.entity';

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private readonly messageRepo: Repository<Message>,
    ) {}

    async sendMessage(senderId: number, receiverId: number, content: string) {
        const message = this.messageRepo.create({ senderId, receiverId, content });
        return this.messageRepo.save(message);
    }

    async getConversation(userId: number, otherUserId: number) {
        return this.messageRepo.find({
            where: [
                { senderId: userId, receiverId: otherUserId },
                { senderId: otherUserId, receiverId: userId },
            ],
            relations: { sender: true, receiver: true },
            order: { createdAt: 'ASC' },
        });
    }
}
