import type { ObjectLiteral, Repository } from 'typeorm';

export interface BaseEntity extends ObjectLiteral {
  id: string;
}

export abstract class BaseRepository<Entity extends BaseEntity = BaseEntity> {
  protected abstract readonly repository: Repository<Entity>;
}
