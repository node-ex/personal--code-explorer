import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { CodebaseFileStatusEnum } from '../../../domain/enums/codebase-file-status.enum';

@Entity('codebase_files')
export class CodebaseFileTypeormEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  filepath!: string;

  @Column({
    type: 'varchar',
    enum: CodebaseFileStatusEnum,
    default: CodebaseFileStatusEnum.UNPROCESSED,
  })
  status!: CodebaseFileStatusEnum;

  @CreateDateColumn({
    name: 'created_at',
    type: 'datetime',
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'datetime',
  })
  updatedAt!: Date;
}
