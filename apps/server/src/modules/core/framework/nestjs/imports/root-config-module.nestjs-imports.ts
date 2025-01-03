import { ConfigModule } from '@nestjs/config';

export const rootConfigModuleNestjsImports = [
  ConfigModule.forRoot({
    // No need to import in other modules
    isGlobal: true,
    expandVariables: true,
    // cache: true,
  }),
];
