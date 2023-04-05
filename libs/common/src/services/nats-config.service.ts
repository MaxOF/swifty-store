import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NatsConfigService {
  public constructor(private readonly configService: ConfigService) {}

  public get host(): string {
    return this.configService.get<string>('NATS_HOST', 'nats');
  }

  public get port(): number {
    return this.configService.get<number>('NATS_PORT', 4222);
  }

  public get username(): string {
    return this.configService.get<string>('NATS_USERNAME');
  }

  public get password(): string {
    return this.configService.get<string>('NATS_PASSWORD');
  }

  public get url(): string {
    return this.configService.get<string>(
      'NATS_URL',
      `nats://${this.host}:${this.port}`,
    );
  }
}
