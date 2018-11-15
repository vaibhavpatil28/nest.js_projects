import { ReflectMetadata } from '@nestjs/common';

export const Role = (...args: string[]) => ReflectMetadata('role', args);
