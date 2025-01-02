import { Module } from '@nestjs/common';
import { SqliteTypeormDatabaseConfigurationNestjsService } from '../services/sqlite-typeorm-database-configuration.nestjs-service';
import { sqliteTypeormDatabaseConfigModuleNestjsImports } from '../imports/sqlite-typeorm-database-config-module.nestjs-imports';

@Module({
  imports: [...sqliteTypeormDatabaseConfigModuleNestjsImports],
  providers: [SqliteTypeormDatabaseConfigurationNestjsService],
  exports: [SqliteTypeormDatabaseConfigurationNestjsService],
})
export class SqliteTypeormDatabaseConfigurationNestjsModule {}
