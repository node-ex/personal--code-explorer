import { registerAs } from '@nestjs/config';
import { ITypeormConfigurationConfig } from '../../../infrastructure/interfaces/typeorm-configuration-config.interface';
import { DataSourceOptions } from 'typeorm';

const TYPEORM_CONFIGURATION_NESTJS_CONFIG_NAMESPACE =
  'TYPEORM_CONFIGURATION_NESTJS_CONFIG_NAMESPACE';

export const typeormConfigurationNestjsConfig = registerAs(
  TYPEORM_CONFIGURATION_NESTJS_CONFIG_NAMESPACE,
  () =>
    ({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      databaseType: process.env[
        'TYPEORM_CONFIGURATION__DATABASE_TYPE'
      ]! as DataSourceOptions['type'],
      databaseFilepath: process.env['TYPEORM_CONFIGURATION__DATABASE_FILEPATH'],
      shouldSynchronize:
        process.env['TYPEORM_CONFIGURATION__SYNCHRONIZE'] === 'true',
    } satisfies ITypeormConfigurationConfig),
);
