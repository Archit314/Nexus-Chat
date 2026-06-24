import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../user/user.entity";

@Entity('friend_requests')
export class FriendRequest{

    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(() => User)
    @JoinColumn({ name: 'senderId' })
    sender!: User

    @Column()
    senderId!: number

    @ManyToOne(() => User)
    @JoinColumn({ name: 'receiverId' })
    receiver!: User

    @Column()
    receiverId!: number

    @Column({ type: 'enum', enum: ['pending', 'accepted', 'rejected'], default: 'pending' })
    status!: string

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date
}