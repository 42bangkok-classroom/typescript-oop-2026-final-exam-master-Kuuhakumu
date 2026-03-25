import { Injectable } from "@nestjs/common";
import { product } from "./product.interface";
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductService {
    findAll() {
        const filePath = path.join(process.cwd(), 'data', 'products.json');
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data) as product[];
    }
      }
