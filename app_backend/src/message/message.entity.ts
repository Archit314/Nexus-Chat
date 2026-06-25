import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";

@Entity('messages')
export class Message {

    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(() => User)
    @JoinColumn({ name: 'senderId' })
    sender: User

    @Column()
    senderId!: number

    @ManyToOne(() => User)
    @JoinColumn({ name: 'receiverId' })
    receiver: User

    @Column()
    receiverId!: number

    @Column()
    content!: string

    @CreateDateColumn()
    createdAt!: Date
}
