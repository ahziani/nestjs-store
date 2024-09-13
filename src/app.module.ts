import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://vukkipiydi:RUhpFOpe8bU8yepU@cluster0.8afua.mongodb.net/store?retryWrites=true&w=majority&appName=Cluster0'
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
