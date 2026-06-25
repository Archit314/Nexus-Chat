import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>
    ){}

    async create(userName: string, email: string, password: string){

        const createdUser = this.userRepo.create({userName, email, password})
        return this.userRepo.save(createdUser)
    }

    async findByEmail(email: string){

        return this.userRepo.findOne({ where: { email}})
    }

    async findByUserName(userName: string){

        return this.userRepo.findOne({ where: { userName}})
    }

    async findById(id: number){

        return this.userRepo.findOne({ where: { id}})
    }

    async search(query: string, excludeUserId?: number) {
        return this.userRepo.find({
            where: [
                { userName: query },
                { email: query },
            ],
        }).then(users => users.filter(user => user.id !== excludeUserId));
    }
}
