import { ZodError, z } from 'zod';

export class CoreZodValidator {
  static validateEnvironmentVariables(
    schema: z.ZodType,
    env: Record<string, string | undefined>,
  ) {
    try {
      schema.parse(env);
    } catch (e) {
      const indentation = '  ';
      if (e instanceof ZodError) {
        const errors = e.errors
          .map(
            (error) =>
              indentation + `- ${error.path.join('.')} - ${error.message}`,
          )
          .join('\n');
        throw new Error(`Environment variable validation error:\n${errors}`);
      }
      throw e;
    }
    return env;
  }
}
