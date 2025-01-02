import { Module } from '@nestjs/common';
import { rootConfigModuleNestjsImports } from '../../../../../shared/framework/nestjs/imports/root-config-module.nestjs-imports';
import { SqliteTypeormDatabaseConfigurationNestjsModule } from '../../../../sqlite-typeorm-database-configuration/framework/nestjs/modules/sqlite-typeorm-database-configuration.nestjs-module';

@Module({
  imports: [
    ...rootConfigModuleNestjsImports,
    SqliteTypeormDatabaseConfigurationNestjsModule,
  ],
})
export class TypeormDataSourcesNestjsModule {}
