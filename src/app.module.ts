import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestSessionOptions, SessionModule } from 'nestjs-session';

@Module({
  imports: [
    SessionModule.forRoot({
      session: { secret: 'hogehoge' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
