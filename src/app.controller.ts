import { Controller, Get, Render, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root(@Session() session: Express.Session) {
    const message = this.appService.getHello();
    return { json: JSON.stringify({ message, sessionId: session.id }) };
  }
}
