import { Appuser } from "src/appuser/entities/appuser.entity";
import { House } from "src/house/entities/house.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'shopping_cart'})
export class Shoppingcart {
    @PrimaryGeneratedColumn()
    id_shopcart: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    creationDate: Date;

    @ManyToOne(type => Appuser, appuser => appuser.shoppingCarts)
    appuser: Appuser;

    @ManyToOne(type => House, house => house.shoppingCarts)
    house: House;
}
