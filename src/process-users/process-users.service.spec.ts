import { Test, TestingModule } from '@nestjs/testing';
import { ProcessUsersService } from './process-users.service';

describe('ProcessUsersService', () => {
  let service: ProcessUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcessUsersService],
    }).compile();

    service = module.get<ProcessUsersService>(ProcessUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
