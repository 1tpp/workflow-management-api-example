import { Test, TestingModule } from '@nestjs/testing';
import { RequestStakeHoldersController } from './request-stake-holders.controller';
import { RequestStakeHoldersService } from './request-stake-holders.service';

describe('RequestStakeHoldersController', () => {
  let controller: RequestStakeHoldersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestStakeHoldersController],
      providers: [RequestStakeHoldersService],
    }).compile();

    controller = module.get<RequestStakeHoldersController>(RequestStakeHoldersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
