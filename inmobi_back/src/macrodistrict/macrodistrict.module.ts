import { Module } from '@nestjs/common';
import { MacrodistrictService } from './macrodistrict.service';
import { MacrodistrictController } from './macrodistrict.controller';

@Module({
  controllers: [MacrodistrictController],
  providers: [MacrodistrictService],
})
export class MacrodistrictModule {}
