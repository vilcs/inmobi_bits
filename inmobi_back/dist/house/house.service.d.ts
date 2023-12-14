import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
export declare class HouseService {
    create(createHouseDto: CreateHouseDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHouseDto: UpdateHouseDto): string;
    remove(id: number): string;
}
