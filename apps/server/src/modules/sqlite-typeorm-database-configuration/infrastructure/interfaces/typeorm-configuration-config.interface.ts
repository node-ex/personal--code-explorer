import { DataSourceOptions } from 'typeorm';

export interface ITypeormConfigurationConfig {
  databaseType: DataSourceOptions['type'];
  databaseFilepath: string | undefined;
  shouldSynchronize: boolean;
}
