import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RequestDataService } from './request-data.service';
import { CreateRequestDatumDto } from './dto/create-request-datum.dto';
import { UpdateRequestDatumDto } from './dto/update-request-datum.dto';

@Controller('request-data')
export class RequestDataController {
  constructor(private readonly requestDataService: RequestDataService) {}

  @Post()
  create(@Body() createRequestDatumDto: CreateRequestDatumDto) {
    return this.requestDataService.create(createRequestDatumDto);
  }

  @Get()
  findAll() {
    return this.requestDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestDataService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRequestDatumDto: UpdateRequestDatumDto,
  ) {
    return this.requestDataService.update(+id, updateRequestDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestDataService.remove(+id);
  }
}
