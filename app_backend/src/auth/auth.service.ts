import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/sign-up.dto';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ){}

    async signUp(signUpDto: SignUpDto){

        const existsUser = await this.userService.findByEmail(signUpDto.email)
        if(existsUser){
            throw new ConflictException('User already exists')
        }

        const hashedPassword = await bcrypt.hash(signUpDto.password, 10)
        const createdUser = await this.userService.create(signUpDto.userName, signUpDto.email, hashedPassword)

        const token = this.generateToken(createdUser.id, createdUser.email)
        return { message: 'User created successfully', user: createdUser, token }
    }

    async signIn(signInDto: SignInDto){

        const existingUser = await this.userService.findByUserName(signInDto.userName)
        if(!existingUser){
            throw new UnauthorizedException('Invalid email or password')
        }

        const isPasswordValid = await bcrypt.compare(signInDto.password, existingUser.password)
        if(!isPasswordValid){
            throw new UnauthorizedException('Invalid email or password')
        }

        const token = this.generateToken(existingUser.id, existingUser.email)
        return { message: 'User signed in successfully', user: existingUser, token }
    }

    private generateToken(userId: number, email: string): string {
        return this.jwtService.sign({ sub: userId, email })
    }
}
