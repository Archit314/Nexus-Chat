import { IsNumber } from 'class-validator';

export class SendRequestDto {
    @IsNumber()
    receiverId!: number;
}
