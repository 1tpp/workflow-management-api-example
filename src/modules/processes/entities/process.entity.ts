import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
