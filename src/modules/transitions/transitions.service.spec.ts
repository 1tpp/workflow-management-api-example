import { Test, TestingModule } from '@nestjs/testing';
import { TransitionsService } from './transitions.service';

describe('TransitionsService', () => {
  let service: TransitionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransitionsService],
    }).compile();

    service = module.get<TransitionsService>(TransitionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
