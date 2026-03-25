import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiExceptionFilter } from './common/api-exception.filter';
import { ProductService } from './products/product.service';
@Module({
  imports: [],
  controllers: [AppController , AppService],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: ApiExceptionFilter,
    },
  ],
})
export class AppModule {}
