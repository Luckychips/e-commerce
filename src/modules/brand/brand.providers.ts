import { Mongoose } from 'mongoose';
import { BrandSchema } from './brand.model';

export const brandProviders = [
    {
        provide: 'BRAND_MODEL',
        useFactory: (mongoose: Mongoose) => mongoose.model('Brand', BrandSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
