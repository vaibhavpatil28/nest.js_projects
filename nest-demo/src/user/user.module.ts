import { Module, MiddlewareConsumer } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserMiddleware } from '../common/middlewares/user.middleware';
import { UserService } from './user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'user', schema: UserSchema, collection: 'users'}])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .forRoutes('user');
  }
}
