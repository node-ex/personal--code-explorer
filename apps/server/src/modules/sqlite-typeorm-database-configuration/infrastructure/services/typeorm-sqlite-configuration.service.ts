import { DataSourceOptions } from 'typeorm';
import path from 'path';
import { AbstractTypeormConfigurationService } from './abstract-typeorm-configuration.service';

export class TypeormSqliteConfigurationService extends AbstractTypeormConfigurationService {
  protected getDatabaseSpecificDataSourceOptions(): DataSourceOptions {
    return {
      type: 'sqlite',
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      database: this.typeormConfigurationConfig.databaseFilepath!,
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
          '..',
          'migrations',
          'sqlite',
          'files',
          '*.ts',
        ),
      ],
    };
  }
}
