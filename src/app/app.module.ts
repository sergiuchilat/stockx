import { Module, NestModule } from '@nestjs/common';

import AppModules from './modules';

@Module({
  imports: [...AppModules],
})
export class AppModule implements NestModule {
  configure() {}
}
