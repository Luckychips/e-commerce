import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import mongoose from 'mongoose';
import { Brand } from '@/modules/brand/brand.model';

export const ProductSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: String,
    content: String,
    price: Number,
    discountRate: Number,
    reviewScore: Number,
    reviewCount: Number,
    qnaCount: Number,
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
    },
});

@ObjectType({ description: 'product' })
export class Product {
    @Field(() => ID, { nullable: true })
    id: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    content: string;

    @Field()
    price: number;

    @Field({ nullable: true })
    discountRate: number;

    @Field({ nullable: true })
    reviewScore: number;

    @Field({ nullable: true })
    reviewCount: number;

    @Field({ nullable: true })
    qnaCount: number;

    @Field(() => Brand)
    brand: Brand;
}

@InputType()
export class ProductInput {
    @Field()
    name: string;

    @Field()
    price: number;

    @Field(() => ID)
    brand: Brand;
}
