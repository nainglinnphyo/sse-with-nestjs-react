/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Param, Post, Sse } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Observable, fromEvent, interval, map } from 'rxjs';
import { SSEService } from './sse.service';
import { MessageEvent } from './interface';

const NEW_ORDER_EVENT_NAME = 'new-order';

@Controller('')
export class AppController {
  constructor(
    private sseService: SSEService,
    private eventEmitter: EventEmitter2,
  ) {}

  @Sse('sse/:id')
  sse(@Param('id') id: string): Observable<MessageEvent> {
    return this.sseService.subscribe(id).pipe(
      map((data) => {
        return { data: { hello: 'world' } };
      }),
    );
    // return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
    return fromEvent(this.eventEmitter, NEW_ORDER_EVENT_NAME).pipe(
      map((data) => {
        return { data: { hello: 'world' } };
      }),
    );
  }

  @Post()
  async create(@Body() body: any) {
    this.sseService.emit(body.channel, {
      message: `hello world from ${body.channel}`,
    });
  }
}
