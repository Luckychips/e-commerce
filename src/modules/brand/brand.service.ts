import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { ApolloError } from 'apollo-server-express';
import { Brand } from './brand.model';

@Injectable()
export class BrandService {
    constructor(
        @Inject('BRAND_MODEL')
        private readonly brandModel: Model<Brand>,
    ) {}

    getHello(): string {
        return 'Hello World!';
    }

    async getBrand(id: string): Promise<Brand> {
        try {
            return await this.brandModel.findById(id);
        } catch (e) {
            throw new ApolloError(e);
        }
    }
}
