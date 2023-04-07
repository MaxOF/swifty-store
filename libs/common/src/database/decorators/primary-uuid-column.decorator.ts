import { PrimaryColumn, PrimaryColumnOptions } from 'typeorm';

export const PrimaryUuidColumn = (
  options: PrimaryColumnOptions = {},
): PropertyDecorator =>
  PrimaryColumn({
    ...options,
    type: 'uuid',
    default: () => 'uuid_generate_v4()',
    nullable: false,
  });
