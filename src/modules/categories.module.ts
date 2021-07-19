import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { CategoriesController } from '../controllers/categories.controller';
// import { AppService } from './app.service';

@Module({
    imports: [],
    controllers: [CategoriesController],
    providers: [],
})
export class CategoriesModule {}
