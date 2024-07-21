import { Field, ID, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const BrandSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: String,
    image: String,
    isWish: Boolean,
    wishCount: Number,
});

@ObjectType({ description: 'brand' })
export class Brand extends Document {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    image: string;

    @Field()
    isWish: boolean;

    @Field()
    wishCount: number;
}
