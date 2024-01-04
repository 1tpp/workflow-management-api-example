import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProcessUsersService } from './process-users.service';
import { CreateProcessUserDto } from './dto/create-process-user.dto';
import { UpdateProcessUserDto } from './dto/update-process-user.dto';

@Controller('process-users')
export class ProcessUsersController {
  constructor(private readonly processUsersService: ProcessUsersService) {}

  @Post()
  create(@Body() createProcessUserDto: CreateProcessUserDto) {
    return this.processUsersService.create(createProcessUserDto);
  }

  @Get()
  findAll() {
    return this.processUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.processUsersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProcessUserDto: UpdateProcessUserDto,
  ) {
    return this.processUsersService.update(+id, updateProcessUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.processUsersService.remove(+id);
  }
}
