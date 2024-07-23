import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/modules/core/database/database.module';
import { BrandResolver } from './brand.resolver';
import { BrandService } from './brand.service';
import { brandProviders } from './brand.providers';

@Module({
    imports: [DatabaseModule],
    providers: [BrandResolver, BrandService, ...brandProviders],
})
export class BrandModule {}
