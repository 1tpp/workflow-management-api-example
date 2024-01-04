import { Module } from '@nestjs/common';
import { RequestDataService } from './request-data.service';
import { RequestDataController } from './request-data.controller';

@Module({
  controllers: [RequestDataController],
  providers: [RequestDataService],
})
export class RequestDataModule {}
