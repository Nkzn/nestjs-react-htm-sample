import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionModule } from 'nestjs-session';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountModule } from './count/count.module';

@Module({
  imports: [
    SessionModule.forRoot({
      session: { secret: 'hogehoge' },
    }),
    TypeOrmModule.forRoot(),
    CountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
