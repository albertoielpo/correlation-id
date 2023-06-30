import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private readonly logger: Logger = new Logger(AppController.name);

  @Get()
  getHello(): Promise<string> {
    this.logger.log('Hello world from controller...');
    return this.appService.getHello();
  }
}
