import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProductModule } from '@/modules';

@Module({
    imports: [
        ProductModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            // playground: false,
            autoSchemaFile: 'schema.gql',
            sortSchema: true,
        }),
    ],
})
export class AppModule {}
