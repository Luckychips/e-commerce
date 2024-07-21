import { Args, Query, Resolver } from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-express';
import { Brand } from './brand.model';
import { BrandService } from './brand.service';

@Resolver(() => Brand)
export class BrandResolver {
    constructor(private readonly brandtService: BrandService) {}

    @Query(() => Brand)
    async getBrand(@Args('id') id: string) {
        try {
            return await this.brandtService.getBrand(id);
        } catch (e) {
            throw new ApolloError(e);
        }
    }
}
