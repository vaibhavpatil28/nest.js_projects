import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private readonly userModel: Model<any>) {}

  async registerUser(userRegInfo): Promise<any> {
    const user = new this.userModel(userRegInfo);
    return await user.save();
  }

  async findAllUsers(): Promise<any> {
    const user = await this.userModel.find();
    return user;
  }
  async deleteUser(userId: Object) {
    console.log('id ====>>>>', userId);
    const user = await this.userModel.deleteOne({ _id: userId['id'] });
    console.log('user', user);
    return user;
  }
  async updateUser(userRegInfo): Promise<any> {
    console.log('userRegInfo', userRegInfo);
    var query = { userName: userRegInfo['userName'] };
    var update = { password: userRegInfo['password'] };
    return await this.userModel.update(query, update);
  }
}
