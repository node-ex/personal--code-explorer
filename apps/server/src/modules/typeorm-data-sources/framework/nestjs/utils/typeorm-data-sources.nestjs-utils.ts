import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { TypeormDataSourcesNestjsModule } from '../modules/typeorm-data-sources.nestjs-module';
import { TypeormConfigurationNestjsService } from '../../../../sqlite-typeorm-database-configuration/framework/nestjs/services/typeorm-configuration.nestjs-service';

export async function createNestjsAppAndExtractTypeormDataSource(): Promise<DataSource> {
  await ConfigModule.envVariablesLoaded;
  const app = await NestFactory.createApplicationContext(
    TypeormDataSourcesNestjsModule,
    {
      logger: false,
    },
  );

  const typeormDataSourceService = app.get(TypeormConfigurationNestjsService);
  const dataSource = new DataSource(
    typeormDataSourceService.getDataSourceOptions(true),
  );

  return dataSource;
}
