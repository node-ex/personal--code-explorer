import { Module, OnModuleInit } from '@nestjs/common';
import { TypeormConfigurationNestjsService } from '../services/typeorm-configuration.nestjs-service';
import { typeormConfigurationConfigModuleNestjsImports } from '../imports/typeorm-configuration-config-module.nestjs-imports';
import { typeormConfigurationNestjsServiceNestjsProviders } from '../providers/typeorm-configuration-nestjs-service.nestjs-providers';
import { TypeormConfigurationValidator } from '../../../infrastructure/validation/validators/typeorm-configuration.validator';

@Module({
  imports: [...typeormConfigurationConfigModuleNestjsImports],
  providers: [...typeormConfigurationNestjsServiceNestjsProviders],
  exports: [TypeormConfigurationNestjsService],
})
export class TypeormConfigurationNestjsModule implements OnModuleInit {
  onModuleInit() {
    TypeormConfigurationValidator.validateEnvironmentVariables(process.env);
  }
}
