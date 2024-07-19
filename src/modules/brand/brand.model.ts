import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'brand' })
export class Brand {
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
