import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AbstractTypeormConfigurationService } from '../../../infrastructure/services/abstract-typeorm-configuration.service';
import { DataSourceOptions } from 'typeorm';

@Injectable()
export class TypeormConfigurationNestjsService {
  constructor(
    private typeormConfigurationService: AbstractTypeormConfigurationService,
  ) {}

  getModuleOptions(): TypeOrmModuleOptions {
    return {
      ...this.typeormConfigurationService.getDataSourceOptions(),
      autoLoadEntities: true,
    };
  }

  getDataSourceOptions(
    shouldLoadEntitiesUsingPaths?: boolean,
  ): DataSourceOptions {
    return this.typeormConfigurationService.getDataSourceOptions(
      shouldLoadEntitiesUsingPaths,
    );
  }
}
