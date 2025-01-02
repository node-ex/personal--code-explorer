import { Module } from '@nestjs/common';
import { GreetingModule } from '../../../../greeting/framework/nestjs/modules/greeting.nestjs-module';
import { rootConfigModuleNestjsImports } from '../../../../../shared/framework/nestjs/imports/root-config-module.nestjs-imports';
import { rootTypeormModuleNestjsImports } from '../../../../../shared/framework/nestjs/imports/root-typeorm-module.nestjs-imports';
import { CodebaseFileProcessingModule } from '../../../../codebase-file-processing/framework/nestjs/modules/codebase-file-processing.module';

@Module({
  imports: [
    ...rootConfigModuleNestjsImports,
    ...rootTypeormModuleNestjsImports,
    GreetingModule,
    CodebaseFileProcessingModule,
  ],
})
export class CoreModule {}
