import { Injectable } from '@nestjs/common';
import { Brand } from './brand.model';

@Injectable()
export class BrandService {
    getHello(): string {
        return 'Hello World!';
    }

    getBrand(id: string): Brand {
        return {
            id: id,
            name: 'hello world',
            image: '',
            isWish: false,
            wishCount: 11,
        };
    }
}
