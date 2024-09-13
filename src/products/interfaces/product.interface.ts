import Document from 'mongoose';

export interface IProduct extends Document {
    id: string;
    title: string;
    price: number;
    image: string;
    description: string;
}