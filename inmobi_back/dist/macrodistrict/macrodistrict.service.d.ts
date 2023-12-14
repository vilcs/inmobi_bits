import { CreateMacrodistrictDto } from './dto/create-macrodistrict.dto';
import { UpdateMacrodistrictDto } from './dto/update-macrodistrict.dto';
export declare class MacrodistrictService {
    create(createMacrodistrictDto: CreateMacrodistrictDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMacrodistrictDto: UpdateMacrodistrictDto): string;
    remove(id: number): string;
}
