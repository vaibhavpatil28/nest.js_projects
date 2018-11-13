import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value ==========>', typeof value);
    if (!value.hasOwnProperty('id')) {
      throw new BadRequestException('there is no id value');
    }
    return value;
  }
}
