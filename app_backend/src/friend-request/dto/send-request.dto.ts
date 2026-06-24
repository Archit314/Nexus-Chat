import { IsNumber } from 'class-validator';

export class SendRequestDto {
    @IsNumber()
    senderId!: number;

    @IsNumber()
    receiverId!: number;
}
