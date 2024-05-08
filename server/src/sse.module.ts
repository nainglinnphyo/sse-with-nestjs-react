import { Global, Module } from '@nestjs/common';
import { SSEService } from './sse.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Global()
@Module({
  providers: [SSEService, EventEmitter2],
  exports: [SSEService],
})
export class SSEModule {}
