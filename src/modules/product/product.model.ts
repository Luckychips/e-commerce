import { Brand } from '@/modules/brand/brand.model';

export type Product = {
    id: string;
    name: string;
    content: string;
    price: number;
    discountRate: number;
    wishCount: number;
    reviewScore: number;
    reviewCount: number;
    qnaCount: number;
    brand: Brand;
};
