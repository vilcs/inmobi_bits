import { Location } from "src/location/entities/location.entity";
import { Macrodistrict } from "src/macrodistrict/entities/macrodistrict.entity";
import { Shoppingcart } from "src/shoppingcart/entities/shoppingcart.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'house'})
export class House {
    @PrimaryGeneratedColumn()
    house_id: number;

    @Column({ type: 'varchar'})
    house_name: string;

    @Column({ type: 'varchar'})
    description: string;

    @Column({ type: 'varchar'})
    direction: string;

    @Column({ type: 'int'})
    status: number;

    @OneToOne((type) => Macrodistrict, (macrodistrict) => macrodistrict.house)
    @JoinColumn()
    macrodistrict: Macrodistrict;

    @OneToMany((type) => Shoppingcart, (shoppingCart) => shoppingCart.house)
    @JoinColumn()
    shoppingCarts: [];

    @OneToOne((type) => Location, (location) => location.house)
    @JoinColumn()
    location: Location;
}
