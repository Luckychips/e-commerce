import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Product } from '@/modules/product/product.model';

@ObjectType({ description: 'product option' })
export class ProductOption {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field(() => Product)
    product: Product;
}
