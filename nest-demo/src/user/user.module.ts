import { Module, MiddlewareConsumer } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserMiddleware } from '../common/middlewares/user.middleware';

@Module({
  controllers: [UserController]
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .forRoutes('user');
  }
}
