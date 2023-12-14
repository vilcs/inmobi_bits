import { House } from "src/house/entities/house.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'macrodistrict'})
export class Macrodistrict {
    @PrimaryGeneratedColumn()
    macrod_id: number;

    @Column({ type: 'varchar', unique: true})
    macrod_name: string;

    @OneToOne((type) => House, (house) => house.macrodistrict)
    @JoinColumn()
    house: House;


}
