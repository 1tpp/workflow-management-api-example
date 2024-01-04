import { Injectable } from '@nestjs/common';
import { CreateRequestStakeHolderDto } from './dto/create-request-stake-holder.dto';
import { UpdateRequestStakeHolderDto } from './dto/update-request-stake-holder.dto';

@Injectable()
export class RequestStakeHoldersService {
  create(createRequestStakeHolderDto: CreateRequestStakeHolderDto) {
    return 'This action adds a new requestStakeHolder';
  }

  findAll() {
    return `This action returns all requestStakeHolders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requestStakeHolder`;
  }

  update(id: number, updateRequestStakeHolderDto: UpdateRequestStakeHolderDto) {
    return `This action updates a #${id} requestStakeHolder`;
  }

  remove(id: number) {
    return `This action removes a #${id} requestStakeHolder`;
  }
}
