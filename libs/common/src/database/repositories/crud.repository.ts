import type { DeepPartial, FindManyOptions, FindOptionsWhere } from 'typeorm';
import { BaseRepository } from './base.repository';
import type { BaseEntity } from '../entities';
import type { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class CrudRepository<Entity extends BaseEntity> extends BaseRepository<Entity> {
  public createQueryBuilder(alias?: string) {
    return this.repository.createQueryBuilder(alias);
  }

  public save(entity: DeepPartial<Entity>) {
    return this.repository.save(entity);
  }

  public findAll(options?: FindManyOptions<Entity>) {
    return this.repository.find(options);
  }

  public findOneBy(options: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[]) {
    return this.repository.findOneBy(options);
  }

  public updateById(id: string, entity: QueryDeepPartialEntity<Entity>) {
    return this.repository.update(id, entity);
  }

  public deleteById(id: string) {
    return this.repository.delete(id);
  }
}
