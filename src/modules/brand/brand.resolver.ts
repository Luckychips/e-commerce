import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-express';
import { Brand, BrandInput } from './brand.model';
import { BrandService } from './brand.service';

@Resolver(() => Brand)
export class BrandResolver {
    constructor(private readonly brandtService: BrandService) {}

    @Query(() => Brand)
    async getBrandList() {
        try {
            return await this.brandtService.getBrandList();
        } catch (e) {
            throw new ApolloError(e);
        }
    }

    @Query(() => Brand)
    async getBrand(@Args('id') id: string) {
        try {
            return await this.brandtService.getBrand(id);
        } catch (e) {
            throw new ApolloError(e);
        }
    }

    @Query(() => Brand)
    async getBrandFromBrandId(@Args('brandId') brandId: string) {
        try {
            return await this.brandtService.getBrandFromBrandId(brandId);
        } catch (e) {
            throw new ApolloError(e);
        }
    }

    @Mutation(() => Brand)
    async addBrand(@Args('brandInputData') brandInputData: BrandInput) {
        try {
            return await this.brandtService.addBrand(brandInputData);
        } catch (e) {
            throw new ApolloError(e);
        }
    }
}
