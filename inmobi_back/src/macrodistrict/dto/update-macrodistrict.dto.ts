import { PartialType } from '@nestjs/mapped-types';
import { CreateMacrodistrictDto } from './create-macrodistrict.dto';

export class UpdateMacrodistrictDto extends PartialType(CreateMacrodistrictDto) {}
