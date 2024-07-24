import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Brand } from '@/modules/brand/brand.model';

@ObjectType({ description: 'product' })
export class Product {
    @Field(() => ID, { nullable: true })
    id: string;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    content: string;

    @Field({ nullable: true })
    price: number;

    @Field({ nullable: true })
    discountRate: number;

    @Field({ nullable: true })
    reviewScore: number;

    @Field({ nullable: true })
    reviewCount: number;

    @Field({ nullable: true })
    qnaCount: number;

    @Field(() => Brand, { nullable: true })
    brand: Brand;
}
