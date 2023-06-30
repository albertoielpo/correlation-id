import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { Logger } from 'nestjs-pino';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {

const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { bufferLogs: true }
  );

  app.use
  app.useLogger(app.get(Logger));
  await app.listen(3000, "0.0.0.0");
}
bootstrap();