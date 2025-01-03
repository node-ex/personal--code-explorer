import { registerAs } from '@nestjs/config';
import { ITypeormConfigurationConfig } from '../../../infrastructure/persistence/interfaces/typeorm-configuration-config.interface';
import { TypeormDatabaseType } from '../../../infrastructure/persistence/types/typeorm.types';

const TYPEORM_CONFIGURATION_NESTJS_CONFIG_NAMESPACE =
  'TYPEORM_CONFIGURATION_NESTJS_CONFIG_NAMESPACE';

export const typeormConfigurationNestjsConfig = registerAs(
  TYPEORM_CONFIGURATION_NESTJS_CONFIG_NAMESPACE,
  () =>
    ({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      databaseType: process.env[
        'TYPEORM_CONFIGURATION__DATABASE_TYPE'
      ]! as TypeormDatabaseType,
      databaseFilepath: process.env['TYPEORM_CONFIGURATION__DATABASE_FILEPATH'],
      shouldSynchronize:
        process.env['TYPEORM_CONFIGURATION__SYNCHRONIZE'] === 'true',
    } satisfies ITypeormConfigurationConfig),
);
