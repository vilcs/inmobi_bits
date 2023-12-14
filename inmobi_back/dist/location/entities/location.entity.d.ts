import { House } from "src/house/entities/house.entity";
export declare class Location {
    location_id: number;
    loc_name: string;
    loc_point: {
        type: 'Point';
        coordinates: number[];
    } | null;
    house: House;
}
