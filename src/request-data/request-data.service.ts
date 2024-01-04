import { Injectable } from '@nestjs/common';
import { CreateRequestDatumDto } from './dto/create-request-datum.dto';
import { UpdateRequestDatumDto } from './dto/update-request-datum.dto';

@Injectable()
export class RequestDataService {
  create(createRequestDatumDto: CreateRequestDatumDto) {
    return 'This action adds a new requestDatum';
  }

  findAll() {
    return `This action returns all requestData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requestDatum`;
  }

  update(id: number, updateRequestDatumDto: UpdateRequestDatumDto) {
    return `This action updates a #${id} requestDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} requestDatum`;
  }
}
