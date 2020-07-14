import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Trainings {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  evaluation_criteria: string;

  @Column({ default: false })
  multiple_choice: boolean;

  @Column()
  question: string;

  @Column()
  observation_title: string;

  @Column()
  observation: string;

}