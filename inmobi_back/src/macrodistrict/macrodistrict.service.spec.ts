import { Test, TestingModule } from '@nestjs/testing';
import { MacrodistrictService } from './macrodistrict.service';

describe('MacrodistrictService', () => {
  let service: MacrodistrictService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MacrodistrictService],
    }).compile();

    service = module.get<MacrodistrictService>(MacrodistrictService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
