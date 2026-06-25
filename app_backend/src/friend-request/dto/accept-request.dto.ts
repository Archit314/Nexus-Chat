import { IsNumber } from 'class-validator';

export class AcceptRequestDto {
    @IsNumber()
    requestId!: number;
}
