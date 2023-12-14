import { Injectable } from '@nestjs/common';
import { CreateMacrodistrictDto } from './dto/create-macrodistrict.dto';
import { UpdateMacrodistrictDto } from './dto/update-macrodistrict.dto';

@Injectable()
export class MacrodistrictService {
  create(createMacrodistrictDto: CreateMacrodistrictDto) {
    return 'This action adds a new macrodistrict';
  }

  findAll() {
    return `This action returns all macrodistrict`;
  }

  findOne(id: number) {
    return `This action returns a #${id} macrodistrict`;
  }

  update(id: number, updateMacrodistrictDto: UpdateMacrodistrictDto) {
    return `This action updates a #${id} macrodistrict`;
  }

  remove(id: number) {
    return `This action removes a #${id} macrodistrict`;
  }
}
