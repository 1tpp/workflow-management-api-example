import { Test, TestingModule } from '@nestjs/testing';
import { RequestStakeHoldersService } from './request-stake-holders.service';

describe('RequestStakeHoldersService', () => {
  let service: RequestStakeHoldersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestStakeHoldersService],
    }).compile();

    service = module.get<RequestStakeHoldersService>(
      RequestStakeHoldersService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
