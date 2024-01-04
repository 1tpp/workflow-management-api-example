import { Module } from '@nestjs/common';
import { ProcessUsersService } from './process-users.service';
import { ProcessUsersController } from './process-users.controller';

@Module({
  controllers: [ProcessUsersController],
  providers: [ProcessUsersService],
})
export class ProcessUsersModule {}
