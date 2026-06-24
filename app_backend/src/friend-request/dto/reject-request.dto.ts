import { IsNumber } from 'class-validator';

export class RejectRequestDto {
    @IsNumber()
    requestId!: number;

    @IsNumber()
    userId!: number;
}
