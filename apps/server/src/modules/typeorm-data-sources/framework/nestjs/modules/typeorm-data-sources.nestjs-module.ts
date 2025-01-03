import { Module } from '@nestjs/common';
import { rootConfigModuleNestjsImports } from '../../../../core/framework/nestjs/imports/root-config-module.nestjs-imports';
import { TypeormConfigurationNestjsModule } from '../../../../typeorm-configuration/framework/nestjs/modules/typeorm-configuration.nestjs-module';

@Module({
  imports: [...rootConfigModuleNestjsImports, TypeormConfigurationNestjsModule],
})
export class TypeormDataSourcesNestjsModule {}
