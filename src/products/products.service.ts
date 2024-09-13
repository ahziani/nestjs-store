import { HttpException, Injectable } from '@nestjs/common';
import { Product } from './models/product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProduct } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private productModel: Model<IProduct>) {}
    private products: Product[] = [
        {
            id: '66e1ad89bca9c653c1d5a86a',
            title: 'Alarm Wrist Watches for',
            price: 500,
            image: 'https://m.media-amazon.com/images/I/61Wzf4q-zRL._AC_SX679_.jpg',
            description: 'ADVANCED PASSIVE NOISE CANCELLATION — sturdy closed earcups'
        },
        {
            id: '66e1c3386870ed55253c1461',
            title: 'Kids Digital Watch',
            price: 500,
            image: 'https://m.media-amazon.com/images/I/61Wzf4q-zRL._AC_SX679_.jpg',
            description: 'ADVANCED PASSIVE NOISE CANCELLATION — sturdy closed earcups'
        }
    ];

    async findAll(): Promise<Product[]> {
        const products = await this.productModel.find().exec();

        if (!products) {
            throw new HttpException('No Product', 500)
        }
        return products;
    }

    findOne(id: string): Product {
        return this.products.find(p => p.id === id)
    }

    create(product: Product) {
        this.products.push(product);

        return this.products;
    }

    update (id: string, updatedProduct: Product) {
        const index = this.products.findIndex(p => p.id === id);

        this.products[index] = {
            ...this.products[index],
            ...updatedProduct
        }

        return this.products[index];
    }

    delete(id: string) {
        this.products = this.products.filter(p => p.id !== id);

        return this.products;
    }
}
