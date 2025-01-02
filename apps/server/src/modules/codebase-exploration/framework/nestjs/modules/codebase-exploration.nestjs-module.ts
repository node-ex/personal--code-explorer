import { Module } from '@nestjs/common';
import { codebaseFileEntityTypeormModuleImports } from '../imports/codebase-file-entity-typeorm-module.nestjs-imports';
import { ICodebaseFileRepositoryOutputPort } from '../../../application/repositories/codebase-file.repository-output-port';
import { CodebaseFileTypeormNestjsRepositoryOutputAdapter } from '../output-adapters/codebase-file-typeorm.nestjs-repository-output-adapter';
import { FileFinderModule } from '../../../../file-finder/framework/nestjs/modules/file-finder.nestjs-module';
import { FindCodebaseFilesUseCase } from '../../../application/use-cases/find-codebase-files.use-case';
import { FindCodebaseFilesNestjsUseCase } from '../use-cases/find-codebase-files.nestjs-use-case';
import { CodebaseExplorationNestjsController } from '../controllers/codebase-exploration.nestjs-controller';

@Module({
  imports: [...codebaseFileEntityTypeormModuleImports, FileFinderModule],
  controllers: [CodebaseExplorationNestjsController],
  providers: [
    {
      provide: ICodebaseFileRepositoryOutputPort,
      useClass: CodebaseFileTypeormNestjsRepositoryOutputAdapter,
    },
    {
      provide: FindCodebaseFilesUseCase,
      useClass: FindCodebaseFilesNestjsUseCase,
    },
  ],
  exports: [],
})
export class CodebaseExplorationModule {}
