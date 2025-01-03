import { DataSourceOptions } from 'typeorm';
import path from 'path';
import { ITypeormConfigurationConfig } from '../interfaces/typeorm-configuration-config.interface';

export abstract class AbstractTypeormConfigurationService {
  constructor(
    protected typeormConfigurationConfig: ITypeormConfigurationConfig,
  ) {}

  getDataSourceOptions(
    shouldLoadEntitiesUsingPaths = false,
  ): DataSourceOptions {
    return {
      ...this.getDatabaseSpecificDataSourceOptions(),
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
            '..',
            'modules',
            '**',
            '*.typeorm-entity.ts',
          ),
        ],
      }),
      ...(this.typeormConfigurationConfig.shouldSynchronize
        ? { synchronize: true }
        : {}),
    };
  }

  /* Template method */
  protected abstract getDatabaseSpecificDataSourceOptions(): DataSourceOptions;
}
