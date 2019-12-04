import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Count {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  count: number;

  @Column('text')
  sessionId: string;
}
