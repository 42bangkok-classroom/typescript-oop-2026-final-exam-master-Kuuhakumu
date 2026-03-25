import { Module } from '@nestjs/common';
import { purchaseController } from './purchase.controller';
import { purchaseService } from './purchase.service';
@Module({
  imports: [],
  controllers: [purchaseController],
  providers: [purchaseService]})

export class ProductModule {}
