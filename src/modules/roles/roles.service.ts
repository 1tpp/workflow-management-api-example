import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const newRole = this.roleRepository.create(createRoleDto);
    return await this.roleRepository.save(newRole);
  }

  async findAll() {
    return await this.roleRepository.find();
  }

  async findOne(id: number) {
    return await this.roleRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this.roleRepository.findOne({
      where: { id },
    });
    const editedRole = Object.assign(role, updateRoleDto);
    return await this.roleRepository.save(editedRole);
  }

  async remove(id: number) {
    return await this.roleRepository.delete({ id });
  }
}
