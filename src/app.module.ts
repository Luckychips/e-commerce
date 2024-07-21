import { Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandModule, ProductModule } from '@/modules';
import * as mongoose from 'mongoose';

@Module({
    imports: [
        BrandModule,
        ProductModule,
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `src/configs/env/.${process.env.NODE_ENV}.env`,
        }),
        MongooseModule.forRoot(process.env.MONGODB_URL),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            // playground: false,
            autoSchemaFile: 'schema.gql',
            sortSchema: true,
        }),
    ],
})
export class AppModule implements NestModule {
    private readonly isDev: boolean = process.env.NODE_ENV === 'dev';
    configure() {
        console.log(process.env.MONGODB_URL);
        mongoose.set('debug', this.isDev);
    }
}
