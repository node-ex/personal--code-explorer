import { Module } from '@nestjs/common';
import { GreetingModule } from '../../../../greeting/framework/nestjs/modules/greeting.nestjs-module';
import { rootConfigModuleNestjsImports } from '../../../../../shared/framework/nestjs/imports/root-config-module.nestjs-imports';

@Module({
  imports: [...rootConfigModuleNestjsImports, GreetingModule],
})
export class CoreModule {}
