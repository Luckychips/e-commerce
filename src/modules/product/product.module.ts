import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/modules/core/database/database.module';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { productProviders } from './product.providers';

@Module({
    imports: [DatabaseModule],
    providers: [ProductResolver, ProductService, ...productProviders],
})
export class ProductModule {}
