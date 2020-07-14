import { EntityRepository, Repository } from 'typeorm';
import { Evaluations } from '../models/evaluation';

@EntityRepository(Evaluations)
export default class FindByCategory extends Repository<Evaluations> {
  public async getCategory(category: string): Promise<Evaluations[]> {
    console.log('category: ', category)
    return this.find({
      where: { category }
    })
  }
}