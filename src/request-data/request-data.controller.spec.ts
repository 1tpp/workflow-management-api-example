import { Test, TestingModule } from '@nestjs/testing';
import { RequestDataController } from './request-data.controller';
import { RequestDataService } from './request-data.service';

describe('RequestDataController', () => {
  let controller: RequestDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestDataController],
      providers: [RequestDataService],
    }).compile();

    controller = module.get<RequestDataController>(RequestDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
