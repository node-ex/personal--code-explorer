import { Inject, Injectable } from '@nestjs/common';
import { sqliteTypeormDatabaseConfigurationNestjsConfig as _databaseConfig } from '../configs/sqlite-typeorm-database.nestjs-config';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SqliteTypeormDatabaseConfigurationService } from '../../../infrastructure/services/sqlite-typeorm-database-configuration.service';
import { ISqliteTypeormDatabaseConfig } from '../../../infrastructure/interfaces/sqlite-typeorm-database-config.interface';

@Injectable()
export class SqliteTypeormDatabaseConfigurationNestjsService extends SqliteTypeormDatabaseConfigurationService {
  constructor(
    @Inject(_databaseConfig.KEY)
    databaseConfig: ISqliteTypeormDatabaseConfig &
      ConfigType<typeof _databaseConfig>,
  ) {
    super(databaseConfig);
  }

  getTypeormModuleOptions(): TypeOrmModuleOptions {
    return {
      ...this.getTypeormDataSourceOptions(),
      autoLoadEntities: true,
    };
  }
}
