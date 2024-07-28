import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ApolloError } from 'apollo-server-express';
import { Product, ProductInput } from './product.model';

@Injectable()
export class ProductService {
    constructor(
        @Inject('PRODUCT_MODEL')
        private readonly productModel: Model<Product>,
    ) {}

    async getProduct(id: string): Promise<Product> {
        try {
            return await this.productModel.findById(id);
        } catch (e) {
            throw new ApolloError(e);
        }
    }

    async addProduct(inputData: ProductInput) {
        try {
            return await this.productModel.create(inputData);
        } catch (e) {
            throw new ApolloError(e);
        }
    }

    getHello(): string {
        return `Hello World! ${process.env.NAME}`;
    }
}
