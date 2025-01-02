import { Module } from '@nestjs/common';
import { codebaseFileEntityTypeormModuleImports } from '../imports/codebase-file-entity-typeorm-module.imports';
import { ICodebaseFileRepositoryOutputPort } from '../../../application/repositories/codebase-file.repository-output-port';
import { CodebaseFileTypeormNestjsRepositoryOutputAdapter } from '../output-adapters/codebase-file-typeorm.nestjs-repository-output-adapter';
import { FileFinderModule } from '../../../../file-finder/framework/nestjs/modules/file-finder.module';

@Module({
  imports: [...codebaseFileEntityTypeormModuleImports, FileFinderModule],
  controllers: [],
  providers: [
    {
      provide: ICodebaseFileRepositoryOutputPort,
      useClass: CodebaseFileTypeormNestjsRepositoryOutputAdapter,
    },
  ],
  exports: [],
})
export class CodebaseExplorationModule {}
