import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const BrandSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    brandId: String,
    name: String,
    image: String,
});

@ObjectType({ description: 'brand' })
export class Brand extends Document {
    @Field(() => ID, { nullable: true })
    id: string;

    @Field({ nullable: true })
    brandId: string;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    image: string;
}

@InputType()
export class BrandInput {
    @Field()
    brandId: string;

    @Field()
    name: string;

    @Field()
    image: string;
}
