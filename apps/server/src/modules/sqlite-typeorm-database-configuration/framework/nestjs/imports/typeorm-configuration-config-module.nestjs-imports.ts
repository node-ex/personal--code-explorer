import { ConfigModule } from '@nestjs/config';
import { typeormConfigurationNestjsConfig } from '../configs/typeorm-configuration.nestjs-config';

export const typeormConfigurationConfigModuleNestjsImports = [
  ConfigModule.forFeature(typeormConfigurationNestjsConfig),
];
