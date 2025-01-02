import { Module } from '@nestjs/common';
import { GreetingModule } from '../../../../greeting/framework/nestjs/modules/greeting.nestjs-module';
import { rootConfigModuleNestjsImports } from '../../../../../shared/framework/nestjs/imports/root-config-module.nestjs-imports';
import { rootTypeormModuleNestjsImports } from '../../../../../shared/framework/nestjs/imports/root-typeorm-module.nestjs-imports';
import { CodebaseExplorationModule } from '../../../../codebase-exploration/framework/nestjs/modules/codebase-exploration.module';

@Module({
  imports: [
    ...rootConfigModuleNestjsImports,
    ...rootTypeormModuleNestjsImports,
    GreetingModule,
    CodebaseExplorationModule,
  ],
})
export class CoreModule {}
