import { TypeOrmModule } from '@nestjs/typeorm';
import { CodebaseFileTypeormEntity } from '../../../infrastructure/typeorm/entities/codebase-file.typeorm-entity';

export const codebaseFileEntityTypeormModuleImports = [
  TypeOrmModule.forFeature([CodebaseFileTypeormEntity]),
];
