import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from '@/modules/users/entities/user.entity';

@Entity({
  name: 'processes',
})
export class Process {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];
}
