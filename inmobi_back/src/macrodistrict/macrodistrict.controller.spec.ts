import { Test, TestingModule } from '@nestjs/testing';
import { MacrodistrictController } from './macrodistrict.controller';
import { MacrodistrictService } from './macrodistrict.service';

describe('MacrodistrictController', () => {
  let controller: MacrodistrictController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MacrodistrictController],
      providers: [MacrodistrictService],
    }).compile();

    controller = module.get<MacrodistrictController>(MacrodistrictController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
