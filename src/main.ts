import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Clever-buy API')
        .setDescription('The super API with nest for CleverBuyApp')
        .setVersion('0.1')
        .addTag('Categories')
        .addTag('Users')
        .addTag('Auth')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.enableCors();
    await app.listen(4000);
}
bootstrap();
