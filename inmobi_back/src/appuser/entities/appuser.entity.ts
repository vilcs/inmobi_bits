import { Shoppingcart } from "src/shoppingcart/entities/shoppingcart.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'appuser'})
export class Appuser {
    @PrimaryGeneratedColumn()
    user_id: number;
    
    @Column({ type: 'varchar', unique: true })
    username: string;

    @Column({ type: 'varchar' })
    firstname: string;

    @Column({ type: 'varchar' })
    lastname: string;

    @Column({ type: 'varchar' })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({type: 'int', default: 1})
    status: number;

    @OneToMany(type => Shoppingcart, shoppingCart => shoppingCart.appuser)
    shoppingCarts: [];
}
