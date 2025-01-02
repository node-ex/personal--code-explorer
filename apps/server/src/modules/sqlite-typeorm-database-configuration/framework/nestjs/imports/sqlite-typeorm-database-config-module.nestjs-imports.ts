import { ConfigModule } from '@nestjs/config';
import { sqliteTypeormDatabaseConfigurationNestjsConfig } from '../configs/sqlite-typeorm-database.nestjs-config';

export const sqliteTypeormDatabaseConfigModuleNestjsImports = [
  ConfigModule.forFeature(sqliteTypeormDatabaseConfigurationNestjsConfig),
];
