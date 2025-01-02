import { Module } from '@nestjs/common';
import { codebaseFileEntityTypeormModuleImports } from '../imports/codebase-file-entity-typeorm-module.imports';

@Module({
  imports: [...codebaseFileEntityTypeormModuleImports],
  controllers: [],
  providers: [],
  exports: [],
})
export class CodebaseFileProcessingModule {}
