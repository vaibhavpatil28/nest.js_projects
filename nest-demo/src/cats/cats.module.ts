import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { LoggerMiddleware } from 'src/common/middlewares/logger.middleware';
import { CatSchema } from './schemas/cat.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Cat', schema: CatSchema, collection: 'cats' },
    ]),
    MongooseModule.forFeature([
      { name: 'CatOld', schema: CatSchema, collection: 'cat' },
    ]),
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void | MiddlewareConsumer {
    // consumer
    //   .apply(LoggerMiddleware)
    //   .exclude(
    //     { path: 'cats', method: RequestMethod.GET },
    //   )
    //   .forRoutes('cats');
  }
}
