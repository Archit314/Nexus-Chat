import { IsNumber, IsString, Length } from "class-validator";

export class SendMessageDto {
    @IsNumber()
    receiverId!: number

    @IsString()
    @Length(1, 1000)
    content!: string
}
