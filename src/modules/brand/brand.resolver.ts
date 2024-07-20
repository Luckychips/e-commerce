import { Args, Query, Resolver } from '@nestjs/graphql';
import { Brand } from './brand.model';
import { BrandService } from './brand.service';

@Resolver(() => Brand)
export class BrandResolver {
    constructor(private readonly brandtService: BrandService) {}

    @Query((returns) => Brand)
    getBrand(@Args('id') id: string) {
        return this.brandtService.getBrand(id);
    }
}
