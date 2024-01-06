import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';

@Injectable()
export class RequestsService {
  async create(createRequestDto: CreateRequestDto) {
    return 'This action adds a new request';
  }

  async findAll() {
    return `This action returns all requests`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} request`;
  }

  async update(id: number, updateRequestDto: UpdateRequestDto) {
    return `This action updates a #${id} request`;
  }

  async remove(id: number) {
    return `This action removes a #${id} request`;
  }
}
