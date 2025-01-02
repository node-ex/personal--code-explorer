import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CodebaseFileTypeormRepositoryOutputAdapter } from '../../../infrastructure/typeorm/repositories/codebase-file-typeorm.repository-output-adapter';
import { CodebaseFileTypeormEntity } from '../../../infrastructure/typeorm/entities/codebase-file.typeorm-entity';

@Injectable()
export class CodebaseFileTypeormNestjsRepositoryOutputAdapter extends CodebaseFileTypeormRepositoryOutputAdapter {
  constructor(
    @InjectRepository(CodebaseFileTypeormEntity)
    adaptedCodebaseFileRepository: Repository<CodebaseFileTypeormEntity>,
  ) {
    super(adaptedCodebaseFileRepository);
  }
}
