import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Count } from './count.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CountService {
  constructor(
    @InjectRepository(Count)
    private readonly countRepository: Repository<Count>,
  ) {}

  findForUser(sessionId: string): Promise<Count> {
    return this.countRepository.findOne({ sessionId });
  }

  async updateForUser(sessionId: string, newCount: number) {
    const count = await this.countRepository.count({ sessionId });

    if (count === 0) {
      const countForInsert = this.countRepository.create({
        sessionId,
        count: newCount,
      });
      await this.countRepository.insert(countForInsert);
      return;
    }

    await this.countRepository.update({ sessionId }, { count: newCount });
  }
}
