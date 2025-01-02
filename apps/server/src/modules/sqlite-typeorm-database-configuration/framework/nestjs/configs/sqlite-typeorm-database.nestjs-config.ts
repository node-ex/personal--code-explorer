import { registerAs } from '@nestjs/config';
import { ISqliteTypeormDatabaseConfig } from '../../../infrastructure/interfaces/sqlite-typeorm-database-config.interface';

const SQLITE_TYPEORM_DATABASE_CONFIGURATION_CONFIG_NAMESPACE =
  'sqliteTypeormDatabaseConfigurationConfig';

export const sqliteTypeormDatabaseConfigurationNestjsConfig = registerAs(
  SQLITE_TYPEORM_DATABASE_CONFIGURATION_CONFIG_NAMESPACE,
  () =>
    ({
      databaseFilepath:
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        process.env[
          'SQLITE_TYPEORM_DATABASE_CONFIGURATION__DATABASE_FILEPATH'
        ]!,
      shouldSynchronize:
        process.env['SQLITE_TYPEORM_DATABASE_CONFIGURATION__SYNCHRONIZE'] ===
        'true',
    } satisfies ISqliteTypeormDatabaseConfig),
);
