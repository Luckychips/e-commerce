import { Resolver, Query, Args } from '@nestjs/graphql';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver {
    constructor(private readonly productService: ProductService) {}

    @Query(() => String)
    greeting() {
        return this.productService.getHello();
    }

    @Query((returns) => Product)
    getProduct(@Args('id') id: string) {
        return {
            id: '',
            name: '',
            content: '',
            price: 0,
            discountRate: 0,
            wishCount: 0,
            reviewScore: 0,
            reviewCount: 0,
            qnaCount: 0,
            brand: {
                id: '',
                name: '',
                image: '',
                isWish: false,
                wishCount: 0,
            },
        };
    }
}
