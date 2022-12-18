import {Entity,Column,PrimaryGeneratedColumn,BaseEntity, JoinColumn} from 'typeorm'
import {IsEmail} from 'class-validator'

@Entity()
export class Users extends BaseEntity{
    @PrimaryGeneratedColumn()
    id_User: number

    @Column({unique : true})
    @IsEmail()
    email: string

    @Column()
    password: string

    @Column()
    username: string
}