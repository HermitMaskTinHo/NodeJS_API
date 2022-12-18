import {Entity,Column,PrimaryGeneratedColumn,BaseEntity,OneToOne,JoinColumn} from "typeorm"
import {PlayerStats} from "./PlayerStats"

@Entity()
export class Player extends BaseEntity{
    @PrimaryGeneratedColumn() 
    id_player: number

    @Column()
    name: string

    @Column()
    sex: string

    @Column()
    id_stats: number
}