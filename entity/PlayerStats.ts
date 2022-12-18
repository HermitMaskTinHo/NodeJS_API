import {Entity,Column,PrimaryGeneratedColumn,BaseEntity,OneToOne} from "typeorm"
import {Player} from "./Player"

@Entity()
export class PlayerStats extends BaseEntity{
    @PrimaryGeneratedColumn() 
    id_stats: number

    @Column()
    health: number

    @Column()
    speed: number

    @Column()
    strengh: number
}