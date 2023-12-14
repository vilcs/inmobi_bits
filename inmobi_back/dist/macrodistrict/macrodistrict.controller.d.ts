import { MacrodistrictService } from './macrodistrict.service';
import { CreateMacrodistrictDto } from './dto/create-macrodistrict.dto';
import { UpdateMacrodistrictDto } from './dto/update-macrodistrict.dto';
export declare class MacrodistrictController {
    private readonly macrodistrictService;
    constructor(macrodistrictService: MacrodistrictService);
    create(createMacrodistrictDto: CreateMacrodistrictDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMacrodistrictDto: UpdateMacrodistrictDto): string;
    remove(id: string): string;
}
