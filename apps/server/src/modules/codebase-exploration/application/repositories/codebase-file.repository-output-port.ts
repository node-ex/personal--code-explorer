import { CodebaseFileEntity } from '../../domain/entities/codebase-file.entity';
import { CodebaseFileStatusEnum } from '../../domain/enums/codebase-file-status.enum';

export const ICodebaseFileRepositoryOutputPort = Symbol(
  'ICodebaseFileRepositoryOutputPort',
);

export interface ICodebaseFileRepositoryOutputPort {
  save(codebaseFile: CodebaseFileEntity): Promise<void>;
  findByFilepath(filepath: string): Promise<CodebaseFileEntity | null>;
  findByStatus(status: CodebaseFileStatusEnum): Promise<CodebaseFileEntity[]>;
  updateStatus(filepath: string, status: CodebaseFileStatusEnum): Promise<void>;
}
