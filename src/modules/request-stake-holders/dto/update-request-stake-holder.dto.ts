import { PartialType } from '@nestjs/mapped-types';
import { CreateRequestStakeHolderDto } from './create-request-stake-holder.dto';

export class UpdateRequestStakeHolderDto extends PartialType(
  CreateRequestStakeHolderDto,
) {}
