import { NestFactory, HttpAdapterHost, BaseExceptionFilter } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const { httpAdapter } = app.get(HttpAdapterHost);
    app.useGlobalFilters(new BaseExceptionFilter(httpAdapter));
    await app.listen(3000);
}
bootstrap();
