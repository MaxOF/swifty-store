import { UpdateDateColumn } from 'typeorm';
import { PrimaryUuidColumn } from '../decorators';
import { Exclude } from 'class-transformer';

export abstract class BaseEntity {
  @PrimaryUuidColumn()
  public id: string;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;
}
