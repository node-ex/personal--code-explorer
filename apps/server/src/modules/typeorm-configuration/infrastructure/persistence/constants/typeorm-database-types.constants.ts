import { TypeormDatabaseTypesEnum } from '../enums/typeorm-database-types.enum';

export const TYPEORM_DATABASE_TYPES = Object.values(
  TypeormDatabaseTypesEnum,
) as unknown as readonly [string, ...string[]];
