import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { ApolloError } from 'apollo-server-express';
import { Brand, BrandInput } from './brand.model';

@Injectable()
export class BrandService {
    constructor(
        @Inject('BRAND_MODEL')
        private readonly brandModel: Model<Brand>,
    ) {}

    // async getBrandList(): Promise<Brand[]> {
    //     try {
    //         return await this.brandModel.find();
    //     } catch (e) {
    //         throw new ApolloError(e);
    //     }
    // }

    async getBrand(id: string): Promise<Brand> {
        try {
            return await this.brandModel.findById(id);
        } catch (e) {
            throw new ApolloError(e);
        }
    }

    async addBrand(inputData: BrandInput): Promise<Brand> {
        try {
            return await this.brandModel.create(inputData);
        } catch (e) {
            throw new ApolloError(e);
        }
    }
}
