import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
import type { RmqOptions, RmqContext } from '@nestjs/microservices';

@Injectable()
export class RmqService {
  public constructor(private readonly configService: ConfigService) {}

  getOptions(queue: string, noAck = false): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [this.configService.get<string>('RABBIT_MQ_URI', 'amqp://rabbitmq:5672')],
        queue: this.configService.get<string>(`RABBIT_MQ_${queue}_QUEUE`),
        persistent: true
      }
    };
  }

  ack(context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    channel.ack(originalMessage);
  }
}
