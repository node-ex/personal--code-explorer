import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteTypeormDatabaseConfigurationNestjsModule } from '../modules/sqlite-typeorm-database-configuration.nestjs-module';
import { SqliteTypeormDatabaseConfigurationNestjsService } from '../services/sqlite-typeorm-database-configuration.nestjs-service';

export const rootTypeormModuleNestjsImports = [
  TypeOrmModule.forRootAsync({
    imports: [SqliteTypeormDatabaseConfigurationNestjsModule],
    useFactory: (
      databaseConfigurationService: SqliteTypeormDatabaseConfigurationNestjsService,
    ) => databaseConfigurationService.getTypeormModuleOptions(),
    inject: [SqliteTypeormDatabaseConfigurationNestjsService],
  }),
];
