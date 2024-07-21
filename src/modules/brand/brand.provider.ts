import { Connection } from 'mongoose';
import { BrandSchema } from './brand.model';

export const BrandProvider: any = [
    {
        provide: 'BRAND_MODEL',
        useFactory: (connection: Connection) => connection.model('Brand', BrandSchema, 'brands'),
        inject: ['DATABASE_CONNECTION'],
    },
];
