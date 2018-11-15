import { Controller, Post, Body, UseGuards, UsePipes, Get, Query } from '@nestjs/common';
import { RolesGuard } from '../../common/guard/roles.guard';
import { Role } from '../../common/decorators/role.decorator';
import { UserPipe } from '../../common/pipes/user.pipe';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService){}
  private user;
  @Post('register')
  @UseGuards(RolesGuard)
  @Role('admin')
  @UsePipes(new UserPipe())
  private register(@Body() userRegInfo) {
    this.user = this.userService.registerUser(userRegInfo);
    // this.user.push(userRegInfo);
    console.log('this.user', this.user);
    return this.user;
  }

  @Get('deleteUser')
  private deleteUser(@Query() userId){
    this.userService.deleteUser(userId);
  }

  @Get('findAllUsers')
  private findAllUsers(){
    return this.userService.findAllUsers();
  }

  @Post('update')
  private update(@Body() userRegInfo){
    this.userService.updateUser(userRegInfo);
  }
}
