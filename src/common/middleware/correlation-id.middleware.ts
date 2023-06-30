import { Injectable, NestMiddleware } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class CorrelationIdMiddleware implements NestMiddleware {
  use(req: { headers: object }, res: { on: Function }, next: () => void) {
    req.headers['x-correlation-id'] = randomUUID();
    next();
  }
}
