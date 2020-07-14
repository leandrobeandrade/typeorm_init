import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { Max, Min, MaxLength, MinLength } from 'class-validator';

@Entity()
export class Evaluations {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  level: string;

  @Column()
  @Max(64, { message: 'Carga Horária deve possuir no máximo 64 hrs' })
  @Min(10, { message: 'Carga Horária deve possuir no mínimo 10 hrs' })
  workload: number;

  @Column()
  @MaxLength(50)
  @MinLength(2)
  category: string;

  @Column()
  validity: number;

  @Column()
  url_image: string;

  @Column()
  training_objective: string

}