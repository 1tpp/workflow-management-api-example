import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequestStakeHoldersService } from './request-stake-holders.service';
import { CreateRequestStakeHolderDto } from './dto/create-request-stake-holder.dto';
import { UpdateRequestStakeHolderDto } from './dto/update-request-stake-holder.dto';

@Controller('request-stake-holders')
export class RequestStakeHoldersController {
  constructor(private readonly requestStakeHoldersService: RequestStakeHoldersService) {}

  @Post()
  create(@Body() createRequestStakeHolderDto: CreateRequestStakeHolderDto) {
    return this.requestStakeHoldersService.create(createRequestStakeHolderDto);
  }

  @Get()
  findAll() {
    return this.requestStakeHoldersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestStakeHoldersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestStakeHolderDto: UpdateRequestStakeHolderDto) {
    return this.requestStakeHoldersService.update(+id, updateRequestStakeHolderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestStakeHoldersService.remove(+id);
  }
}
