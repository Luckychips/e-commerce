import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Brand } from '@/modules/brand/brand.model';

@ObjectType({ description: 'product' })
export class Product {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    content: string;

    @Field()
    price: number;

    @Field()
    discountRate: number;

    @Field()
    wishCount: number;

    @Field()
    reviewScore: number;

    @Field()
    reviewCount: number;

    @Field()
    qnaCount: number;

    @Field(() => Brand)
    brand: Brand;
}
