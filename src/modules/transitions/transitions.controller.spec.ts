import { Test, TestingModule } from '@nestjs/testing';
import { TransitionsController } from './transitions.controller';
import { TransitionsService } from './transitions.service';

describe('TransitionsController', () => {
  let controller: TransitionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransitionsController],
      providers: [TransitionsService],
    }).compile();

    controller = module.get<TransitionsController>(TransitionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
