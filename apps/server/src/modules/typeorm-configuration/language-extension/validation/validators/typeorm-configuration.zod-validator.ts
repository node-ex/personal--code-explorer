import { CoreZodValidator } from '../../../../core/language-extension/validation/validators/core.zod-validator';
import { TypeormConfigurationEnvironmentVariablesZodValidationSchema } from '../schema/typeorm-configuration-environment-variables.zod-validation-schema';

export class TypeormConfigurationZodValidator {
  static validateEnvironmentVariables(
    env: Record<string, string | undefined>,
  ): void {
    CoreZodValidator.validateEnvironmentVariables(
      TypeormConfigurationEnvironmentVariablesZodValidationSchema,
      env,
    );
  }
}
