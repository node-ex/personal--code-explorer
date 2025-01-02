import { DataSourceOptions } from 'typeorm';
import path from 'path';
import { ISqliteTypeormDatabaseConfig } from '../interfaces/sqlite-typeorm-database-config.interface';

export class SqliteTypeormDatabaseConfigurationService {
  constructor(protected databaseConfig: ISqliteTypeormDatabaseConfig) {}

  getTypeormDataSourceOptions(
    shouldLoadEntitiesUsingPaths = false,
  ): DataSourceOptions {
    return {
      type: 'sqlite',
      database: this.databaseConfig.databaseFilepath,
      /*
       * This only properly works when running TypeORM CLI commands
       * using ts-node. When running NestJS app using NestJS CLI, JS code would
       * import uncompiled TS code of entities.
       */
      ...(shouldLoadEntitiesUsingPaths && {
        entities: [
          path.resolve(
            __dirname,
            '..',
            '..',
            '..',
            'modules',
            '**',
            '*.entity.ts',
          ),
        ],
      }),
      /*
       * Its ok to use paths here, because migrations are run via
       * TypeORM CLI commands using ts-node
       */
      migrations: [
        path.resolve(
          __dirname,
          '..',
          '..',
          '..',
          'migrations',
          'files',
          '*.ts',
        ),
      ],
      ...(this.databaseConfig.shouldSynchronize ? { synchronize: true } : {}),
    };
  }
}
