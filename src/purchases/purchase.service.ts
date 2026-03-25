import { Injectable } from '@nestjs/common';
import { purchase } from './purchase.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class purchaseService {
  test(): any[] {
    return [];
  }
  findAll(): purchase[] {
    const filePath = path.join(process.cwd(), 'data', 'purchases.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data) as purchase[];
  }
}