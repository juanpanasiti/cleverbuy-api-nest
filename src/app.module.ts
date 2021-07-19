import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './modules/categories.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';

@Module({
    imports: [CategoriesModule],
    controllers: [AppController, AuthController],
    providers: [AppService, AuthService],
})
export class AppModule {}
