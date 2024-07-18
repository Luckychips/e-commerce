import { Product } from '@/modules/product/product.model';

export type ProductOption = {
    id: string;
    name: string;
    product: Product;
};
