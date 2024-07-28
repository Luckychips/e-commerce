import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Product, ProductInput } from './product.model';
import { ApolloError } from 'apollo-server-express';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver {
    constructor(private readonly productService: ProductService) {}

    @Query(() => String)
    greeting() {
        return this.productService.getHello();
    }

    @Query(() => Product, { nullable: true })
    async getProduct(@Args('id') id: string) {
        try {
            return await this.productService.getProduct(id);
        } catch (e) {
            throw new ApolloError(e);
        }
    }

    @Mutation(() => Product)
    async addProduct(@Args('productInputData') productInputData: ProductInput) {
        try {
            return await this.productService.addProduct(productInputData);
        } catch (e) {
            throw new ApolloError(e);
        }
    }
}
