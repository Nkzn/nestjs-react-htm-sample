import { Module } from '@nestjs/common';
import { CountService } from './count.service';
import { CountController } from './count.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Count } from './count.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Count])],
  providers: [CountService],
  controllers: [CountController],
})
export class CountModule {}
