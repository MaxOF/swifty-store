import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonConfigService, NatsConfigService } from './services';
import { DatabaseModule } from './database';
import { ClientsModule } from '@nestjs/microservices';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      ignoreEnvFile: true,
      ignoreEnvVars: false
    }),
    DatabaseModule
  ],
  providers: [CommonConfigService, NatsConfigService],
  exports: [CommonConfigService, NatsConfigService]
})
export class CommonModule {}
