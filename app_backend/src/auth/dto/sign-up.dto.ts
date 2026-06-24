import { IsEmail, IsString, Length } from "class-validator";

export class SignUpDto{

    @IsString()
    @Length(4, 20)
    userName!: string

    @IsEmail()
    email!: string

    @IsString()
    @Length(6, 12)
    password!: string
}