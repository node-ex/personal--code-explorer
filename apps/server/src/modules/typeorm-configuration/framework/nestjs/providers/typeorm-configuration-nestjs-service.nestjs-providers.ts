import { TypeormConfigurationNestjsService } from '../services/typeorm-configuration.nestjs-service';
import { typeormConfigurationNestjsConfig } from '../configs/typeorm-configuration.nestjs-config';
import { ITypeormConfigurationConfig } from '../../../infrastructure/persistence/interfaces/typeorm-configuration-config.interface';
import { ConfigType } from '@nestjs/config';
import { AbstractTypeormConfigurationService } from '../../../infrastructure/persistence/services/abstract-typeorm-configuration.service';
import { TypeormSqliteConfigurationService } from '../../../infrastructure/persistence/services/typeorm-sqlite-configuration.service';
import { TypeormDatabaseTypesEnum } from '../../../infrastructure/persistence/enums/typeorm-database-types.enum';

export const typeormConfigurationNestjsServiceNestjsProviders = [
  {
    provide: TypeormConfigurationNestjsService,
    inject: [typeormConfigurationNestjsConfig.KEY],
    useFactory: (
      typeormConfigurationConfig: ITypeormConfigurationConfig &
        ConfigType<typeof typeormConfigurationNestjsConfig>,
    ) => {
      let typeormConfigurationService: AbstractTypeormConfigurationService;
      if (
        typeormConfigurationConfig.databaseType ===
        TypeormDatabaseTypesEnum.SQLITE
      ) {
        typeormConfigurationService = new TypeormSqliteConfigurationService(
          typeormConfigurationConfig,
        );
      } else {
        throw new Error(
          `Database type not supported by the application: ${typeormConfigurationConfig.databaseType}`,
        );
      }

      return new TypeormConfigurationNestjsService(typeormConfigurationService);
    },
  },
];
