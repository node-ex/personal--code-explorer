import { Repository } from 'typeorm';
import { ICodebaseFileRepositoryOutputPort } from '../../../application/repositories/codebase-file.repository-output-port';
import { CodebaseFileEntity } from '../../../domain/entities/codebase-file.entity';
import { CodebaseFileStatusEnum } from '../../../domain/enums/codebase-file-status.enum';
import { CodebaseFileTypeormEntity } from '../entities/codebase-file.typeorm-entity';
import { CodebaseFileDataMapper } from '../data-mappers/codebase-file.data-mapper';

export class CodebaseFileTypeormRepositoryOutputAdapter
  implements ICodebaseFileRepositoryOutputPort
{
  constructor(
    private readonly adaptedCodebaseFileRepository: Repository<CodebaseFileTypeormEntity>,
  ) {}

  async save(codebaseFile: CodebaseFileEntity): Promise<void> {
    const typeormEntity = CodebaseFileDataMapper.toTypeormEntity(codebaseFile);
    await this.adaptedCodebaseFileRepository.save(typeormEntity);
  }

  async findByFilepath(filepath: string): Promise<CodebaseFileEntity | null> {
    const typeormEntity = await this.adaptedCodebaseFileRepository.findOne({
      where: { filepath },
    });

    if (!typeormEntity) {
      return null;
    }

    return CodebaseFileDataMapper.toDomainEntity(typeormEntity);
  }

  async findByStatus(
    status: CodebaseFileStatusEnum,
  ): Promise<CodebaseFileEntity[]> {
    const typeormEntities = await this.adaptedCodebaseFileRepository.find({
      where: { status },
    });

    return CodebaseFileDataMapper.toDomainEntities(typeormEntities);
  }

  async updateStatus(
    filepath: string,
    status: CodebaseFileStatusEnum,
  ): Promise<void> {
    await this.adaptedCodebaseFileRepository.update({ filepath }, { status });
  }
}