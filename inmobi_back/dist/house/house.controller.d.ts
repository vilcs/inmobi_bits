import { HouseService } from './house.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
export declare class HouseController {
    private readonly houseService;
    constructor(houseService: HouseService);
    create(createHouseDto: CreateHouseDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHouseDto: UpdateHouseDto): string;
    remove(id: string): string;
}
