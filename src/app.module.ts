import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    RouterModule.register([
      {
        path: '/auth',
        module: AuthModule,
      },
    ]),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
