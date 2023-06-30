import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { LoggerModule } from 'nestjs-pino';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    CommonModule,
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env.LOG_LEVEL || 'debug',
        redact: ['request.headers.authorization'],
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            singleLine: true,
            levelFirst: false,
            translateTime: "yyyy-MM-dd'T'HH:mm:ss.l'Z'",
            messageFormat: '{req.headers.x-correlation-id} [{context}] {msg}',
            ignore: 'pid,hostname,context,req,res,responseTime',
            errorLikeObjectKeys: ['err', 'error'],
          },
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
