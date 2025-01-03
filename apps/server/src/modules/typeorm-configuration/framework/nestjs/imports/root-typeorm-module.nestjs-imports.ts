import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfigurationNestjsModule } from '../modules/typeorm-configuration.nestjs-module';
import { TypeormConfigurationNestjsService } from '../services/typeorm-configuration.nestjs-service';

export const rootTypeormModuleNestjsImports = [
  TypeOrmModule.forRootAsync({
    imports: [TypeormConfigurationNestjsModule],
    useFactory: (
      typeormConfigurationService: TypeormConfigurationNestjsService,
    ) => typeormConfigurationService.getModuleOptions(),
    inject: [TypeormConfigurationNestjsService],
  }),
];
