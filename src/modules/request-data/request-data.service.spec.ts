import { Test, TestingModule } from '@nestjs/testing';
import { RequestDataService } from './request-data.service';

describe('RequestDataService', () => {
  let service: RequestDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestDataService],
    }).compile();

    service = module.get<RequestDataService>(RequestDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
