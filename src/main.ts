import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import buildApiDocs from './docs/swagger.builder';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import ConfigEnv from './config/config.env';
import appConfig, { AppConfigStrategies } from './config/app-config/app-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  appConfig.init(AppConfigStrategies.json);

  if (appConfig.getConfig().docs.generate) {
    buildApiDocs(app, ConfigEnv);
  }
  
  app.useGlobalPipes(new ValidationPipe());
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(appConfig.getConfig().app.port);
}
bootstrap();
