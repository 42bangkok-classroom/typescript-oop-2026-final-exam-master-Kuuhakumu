import { Controller, Get } from '@nestjs/common';
import { purchaseService } from './purchase.service';

@Controller()
export class purchaseController{
    constructor(private readonly purchaseService: purchaseService) {}
    @Get()
    findAll() {
      return this.purchaseService.findAll();
}}