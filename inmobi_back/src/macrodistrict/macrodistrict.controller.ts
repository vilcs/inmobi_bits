import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MacrodistrictService } from './macrodistrict.service';
import { CreateMacrodistrictDto } from './dto/create-macrodistrict.dto';
import { UpdateMacrodistrictDto } from './dto/update-macrodistrict.dto';

@Controller('macrodistrict')
export class MacrodistrictController {
  constructor(private readonly macrodistrictService: MacrodistrictService) {}

  @Post()
  create(@Body() createMacrodistrictDto: CreateMacrodistrictDto) {
    return this.macrodistrictService.create(createMacrodistrictDto);
  }

  @Get()
  findAll() {
    return this.macrodistrictService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.macrodistrictService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMacrodistrictDto: UpdateMacrodistrictDto) {
    return this.macrodistrictService.update(+id, updateMacrodistrictDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.macrodistrictService.remove(+id);
  }
}
