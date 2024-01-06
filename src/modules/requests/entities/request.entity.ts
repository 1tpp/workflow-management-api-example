import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { User } from '@/modules/users/entities/user.entity';
import { Process } from '@/modules/processes/entities/process.entity';

@Entity({
  name: 'requests',
})
export class Request {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn({
    name: 'created_by',
    referencedColumnName: 'id',
  })
  createdBy: User;

  @ManyToOne(() => Process)
  @JoinColumn({
    name: 'process',
    referencedColumnName: 'id',
  })
  process: Process;

  @OneToOne(() => User)
  @JoinTable({
    name: 'requests_stakeholders',
    joinColumn: {
      name: 'request',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user',
      referencedColumnName: 'id',
    },
  })
  stakeholders: User;

  @Column()
  title: string;

  @Column()
  date: Date;
}
