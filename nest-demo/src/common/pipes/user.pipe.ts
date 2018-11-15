import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class UserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value ==========>', typeof value);
    if (!value.hasOwnProperty('username')) {
      throw new BadRequestException('there is no username field');
    }
    if (!value.hasOwnProperty('password')) {
      throw new BadRequestException('there is no password field');
    }
    return value;
  }
}
