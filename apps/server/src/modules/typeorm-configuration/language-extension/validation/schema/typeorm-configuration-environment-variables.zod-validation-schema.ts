import { z } from 'zod';
import { TypeormConfigurationEnvironmentVariablesEnum } from '../../../infrastructure/validation/enums/typeorm-configuration-environment-variables.enum';
import { TYPEORM_DATABASE_TYPES } from '../../../infrastructure/persistence/constants/typeorm-database-types.constants';

// WARN: Depends on some imports from the infrastructure layer, so that it
//       does not have to depend on the typeorm package
export const TypeormConfigurationEnvironmentVariablesZodValidationSchema = z
  .object({
    [TypeormConfigurationEnvironmentVariablesEnum.TYPEORM_CONFIGURATION__DATABASE_TYPE]:
      z.enum(TYPEORM_DATABASE_TYPES, {
        errorMap: () => ({
          message:
            'Invalid database type. Allowed types are: ' +
            TYPEORM_DATABASE_TYPES.join(', '),
        }),
      }),
    [TypeormConfigurationEnvironmentVariablesEnum.TYPEORM_CONFIGURATION__DATABASE_FILEPATH]:
      z.string().optional(),
    [TypeormConfigurationEnvironmentVariablesEnum.TYPEORM_CONFIGURATION__SYNCHRONIZE]:
      z
        .string()
        .optional()
        .refine(
          (val) => val === undefined || val === 'true' || val === 'false',
          {
            message:
              'SYNCHRONIZE must be a string "true" or "false" if provided.',
          },
        ),
  })
  .refine(
    (config) =>
      config[
        TypeormConfigurationEnvironmentVariablesEnum
          .TYPEORM_CONFIGURATION__DATABASE_TYPE
      ] === 'sqlite' &&
      !!config[
        TypeormConfigurationEnvironmentVariablesEnum
          .TYPEORM_CONFIGURATION__DATABASE_FILEPATH
      ],
    {
      message:
        'If TYPEORM_CONFIGURATION__DATABASE_TYPE is "sqlite", then TYPEORM_CONFIGURATION__DATABASE_FILEPATH is required',
    },
  );
