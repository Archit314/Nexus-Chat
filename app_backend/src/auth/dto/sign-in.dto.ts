import { IsString, Length } from "class-validator";

export class SignInDto{

    @IsString()
    @Length(4, 20)
    userName!: string

    @IsString()
    @Length(6, 12)
    password!: string
}