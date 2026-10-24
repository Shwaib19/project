import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    RouterModule.register([
      {
        path: '/auth',
        module: AuthModule,
      },
    ]),

    AuthModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
      username: process.env.DB_USER || 'todonest',
      password: process.env.DB_PASSWORD || 'todonest',
      database: process.env.DB_NAME || 'todonest',
      entities: ['auth/**/*.entity{.ts,.js}'],
      synchronize: true, //avoid using this in production, use migrations instead
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
