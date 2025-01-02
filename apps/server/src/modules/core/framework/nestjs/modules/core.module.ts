import { Module } from '@nestjs/common';
import { GreetingModule } from '../../../../greeting/framework/nestjs/modules/greeting.nestjs-module';
import { rootConfigModuleNestjsImports } from '../../../../../shared/framework/nestjs/imports/root-config-module.nestjs-imports';
import { rootTypeormModuleNestjsImports } from '../../../../../shared/framework/nestjs/imports/root-typeorm-module.nestjs-imports';
import { CodebaseExplorationModule } from '../../../../codebase-exploration/framework/nestjs/modules/codebase-exploration.nestjs-module';
import { globalValidationPipeProviders } from '../../../../../shared/framework/nestjs/providers/global-validation-pipe.nestjs-providers';

@Module({
  imports: [
    ...rootConfigModuleNestjsImports,
    ...rootTypeormModuleNestjsImports,
    GreetingModule,
    CodebaseExplorationModule,
  ],
  providers: [...globalValidationPipeProviders],
})
export class CoreModule {}
