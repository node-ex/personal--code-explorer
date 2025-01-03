import { TypeormDatabaseType } from '../types/typeorm.types';

export interface ITypeormConfigurationConfig {
  databaseType: TypeormDatabaseType;
  databaseFilepath: string | undefined;
  shouldSynchronize: boolean;
}
