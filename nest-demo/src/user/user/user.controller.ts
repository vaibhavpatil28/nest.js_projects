import { Controller, Post, Body, UseGuards, UsePipes } from '@nestjs/common';
import { RolesGuard } from '../../common/guard/roles.guard';
import { Role } from '../../common/decorators/role.decorator';
import { UserPipe } from '../../common/pipes/user.pipe';

@Controller('user')
export class UserController {
  private user = [];
  @Post('register')
  @UseGuards(RolesGuard)
  @Role('admin')
  @UsePipes(new UserPipe())
  register(@Body() createUser) {
    this.user.push(createUser);
    console.log('this.user', this.user);
    return this.user;
  }
}
