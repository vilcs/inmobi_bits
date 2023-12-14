import { Location } from "src/location/entities/location.entity";
import { Macrodistrict } from "src/macrodistrict/entities/macrodistrict.entity";
export declare class House {
    house_id: number;
    house_name: string;
    description: string;
    direction: string;
    status: number;
    macrodistrict: Macrodistrict;
    shoppingCarts: [];
    location: Location;
}
