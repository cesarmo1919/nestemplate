import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as csrf from 'csurf';
import * as helmet from 'helmet';
import * as reateLimit from 'express-rate-limit';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Employees Service')
    .setDescription('La présentation API du microservice des Employés')
    .setVersion('1.0')
    .addTag('employees')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  app.use(helmet());
  app.enableCors();
  // app.use(csrf());

  app.use(
    reateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
    }),
  );

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
