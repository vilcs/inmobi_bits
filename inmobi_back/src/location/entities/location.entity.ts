import { House } from "src/house/entities/house.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'location'})
export class Location {
    @PrimaryGeneratedColumn()
    location_id: number;

    @Column({type: 'varchar'})
    loc_name: string;

    @Column({ type: 'geometry', spatialFeatureType: 'Point', nullable: true })
    loc_point: { type: 'Point', coordinates: number[] } | null;

    @OneToOne((type) => House, (house) => house.location)
    @JoinColumn()
    house: House;
}
