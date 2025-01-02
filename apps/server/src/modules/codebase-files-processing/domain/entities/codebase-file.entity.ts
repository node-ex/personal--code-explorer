import { CodebaseFileStatusEnum } from '../enums/codebase-file-status.enum';

export class CodebaseFileEntity {
  constructor(
    public readonly filepath: string,
    public readonly status = CodebaseFileStatusEnum.UNPROCESSED,
  ) {}
}
