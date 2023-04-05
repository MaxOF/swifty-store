import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonConfigService, NatsConfigService } from './services';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      ignoreEnvFile: true,
      ignoreEnvVars: false,
    }),
  ],
  providers: [CommonConfigService, NatsConfigService],
  exports: [CommonConfigService, NatsConfigService],
})
export class CommonModule {}
