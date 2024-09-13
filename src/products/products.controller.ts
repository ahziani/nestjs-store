import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService:ProductsService) {}
    
    // GET products
    @Get()
    getProducts() {
        return this.productsService.findAll();
    }

    // GET products/:id
    @Get(':id')
    getProduct(@Param('id') id:string) {
        return this.productsService.findOne(id)
    }

    // POST products 
    @Post()
    addProduct(@Body() product: any) {
        return this.productsService.create(product);
    }

    // PATCH products/:id
    @Patch(':id')
    editProduct(@Param('id') id:string, @Body() product: any) {
        return this.productsService.update(id, product);
        //return {id, product}
    }

    // DELETE products/:id
    @Delete(':id')
    removeProduct(@Param('id') id:string) {
        return this.productsService.delete(id);
    }
}
