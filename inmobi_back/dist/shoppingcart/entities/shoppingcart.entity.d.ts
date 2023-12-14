import { Appuser } from "src/appuser/entities/appuser.entity";
import { House } from "src/house/entities/house.entity";
export declare class Shoppingcart {
    id_shopcart: number;
    creationDate: Date;
    appuser: Appuser;
    house: House;
}
