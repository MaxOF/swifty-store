import type { Type } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { CommonConfigService, NatsConfigService } from './services';
import { Transport } from '@nestjs/microservices';

export const CommonSetup = async (module: Type) => {
  const app = await NestFactory.create<NestExpressApplication>(module, {
    bufferLogs: true,
    autoFlushLogs: true,
    bodyParser: true,
    logger: ['warn', 'error', 'log', 'debug', 'verbose']
  });

  const commonConfig = app.get(CommonConfigService);
  const natsConfig = app.get(NatsConfigService);

  app.set('trust proxy', 1);
  app.enableCors();

  const microservice = app.connectMicroservice({
    transport: Transport.NATS,
    options: {
      servers: [natsConfig.url],
      queue: commonConfig.application
    }
  });

  console.log(app);
  console.log(microservice);
  await app.startAllMicroservices();
  await app.listen(commonConfig.port, commonConfig.host);
};
