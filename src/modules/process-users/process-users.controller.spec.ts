import { Test, TestingModule } from '@nestjs/testing';
import { ProcessUsersController } from './process-users.controller';
import { ProcessUsersService } from './process-users.service';

describe('ProcessUsersController', () => {
  let controller: ProcessUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcessUsersController],
      providers: [ProcessUsersService],
    }).compile();

    controller = module.get<ProcessUsersController>(ProcessUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
