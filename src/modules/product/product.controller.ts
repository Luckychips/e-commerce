import { Controller, Get, Param } from '@nestjs/common';
import { Product } from '@/modules/product/product.model';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get('list')
    getProductList(): Product[] {
        return [];
    }

    @Get(':id')
    getProduct(@Param('id') id: string): Product {
        return {
            id: id,
            name: '',
            content: '',
            price: 10000,
            discountRate: 10,
            wishCount: 100,
            reviewScore: 5,
            reviewCount: 102,
            qnaCount: 33,
            brand: {
                id: 'idudi',
                name: '',
                image: '',
                isWish: false,
                wishCount: 1003,
            },
        };
    }
}
