import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger: Logger = new Logger(AppService.name);
  async getHello(): Promise<string> {
    this.logger.log('Hello world from service...');
    return new Promise<string>((resolve, reject) => {
      this.logger.log('Hello inside the promise..');
      resolve('gethello from promise');
    });
  }
}
