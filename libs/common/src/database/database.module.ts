import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Entities from './entities';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('POSTGRES_HOST', 'localhost'),
          port: configService.get('POSTGRES_PORT', 5432),
          database: configService.get('POSTGRES_DATABASE', 'fetlison'),
          username: configService.get('POSTGRES_USERNAME', 'postgres'),
          password: configService.get('POSTGRES_PASSWORD', 'root'),
          synchronize: false,
          entities: Object.values(Entities),
          autoLoadEntities: true,
          keepConnectionAlive: true,
          migrationsRun: true,
          migrationsTransactionMode: 'all',
          migrationsTableName: 'migrations',
          logging: ['error'],
        };
      },
    }),
  ],
})
export class DatabaseModule {}
