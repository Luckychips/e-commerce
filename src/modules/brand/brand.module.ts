import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/modules/core/database/database.module';
import { BrandProvider } from './brand.provider';
import { BrandResolver } from './brand.resolver';
import { BrandService } from './brand.service';

@Module({
    imports: [DatabaseModule],
    providers: [BrandProvider, BrandResolver, BrandService],
})
export class BrandModule {}
