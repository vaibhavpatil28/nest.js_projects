import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log('roles', roles);
    if (!roles) {
      return true;
    }
    console.log('guard checking...');
    const request = context.switchToHttp().getRequest();
    // console.log('request', request)
    const user = request.body.user;
    console.log('user ==> ', user);
    const hasRole = () => {
      const isValidRole = user.roles.some(role =>
        roles.find(item => item === role),
      );
      console.log('isValidRole====>', isValidRole);
      return isValidRole;
    };
    return user && user.roles && hasRole();
  }
}
