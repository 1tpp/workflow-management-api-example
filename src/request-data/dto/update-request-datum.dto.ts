import { PartialType } from '@nestjs/mapped-types';
import { CreateRequestDatumDto } from './create-request-datum.dto';

export class UpdateRequestDatumDto extends PartialType(CreateRequestDatumDto) {}
