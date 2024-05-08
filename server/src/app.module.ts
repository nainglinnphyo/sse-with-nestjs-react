import { EventEmitter2 } from '@nestjs/event-emitter';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SSEModule } from './sse.module';
// import { SSEService } from './sse.service';

@Module({
  imports: [SSEModule],
  controllers: [AppController],
  providers: [AppService, EventEmitter2],
})
export class AppModule {}
