import { CodebaseFileEntity } from '../../../domain/entities/codebase-file.entity';
import { CodebaseFileTypeormEntity } from '../entities/codebase-file.typeorm-entity';

export class CodebaseFileEntityDataMapper {
  static toDomainEntity(
    typeormEntity: CodebaseFileTypeormEntity,
  ): CodebaseFileEntity {
    return new CodebaseFileEntity(typeormEntity.filepath, typeormEntity.status);
  }

  static toDomainEntities(
    typeormEntities: CodebaseFileTypeormEntity[],
  ): CodebaseFileEntity[] {
    return typeormEntities.map((entity) => this.toDomainEntity(entity));
  }

  static toTypeormEntity(
    domainEntity: CodebaseFileEntity,
  ): CodebaseFileTypeormEntity {
    const typeormEntity = new CodebaseFileTypeormEntity();
    typeormEntity.filepath = domainEntity.filepath;
    typeormEntity.status = domainEntity.status;

    return typeormEntity;
  }
}
