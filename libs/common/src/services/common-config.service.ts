import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { Environment } from '../enums';

@Injectable()
export class CommonConfigService {
  public constructor(private readonly configService: ConfigService) {}

  public get application(): string {
    return this.configService.get<string>('APPLICATION');
  }

  public get host(): string {
    return this.configService.get<string>('HOST', '0.0.0.0');
  }

  public get port(): number {
    return this.configService.get<number>('PORT', 3000);
  }

  public get environment(): Environment {
    return this.configService.get<string>('NODE_ENV', 'development') as Environment;
  }

  public isDevelopment(): boolean {
    return this.environment === Environment.Development;
  }
}
