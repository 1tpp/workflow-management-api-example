import { Module } from '@nestjs/common';
import { RequestStakeHoldersService } from './request-stake-holders.service';
import { RequestStakeHoldersController } from './request-stake-holders.controller';

@Module({
  controllers: [RequestStakeHoldersController],
  providers: [RequestStakeHoldersService],
})
export class RequestStakeHoldersModule {}
