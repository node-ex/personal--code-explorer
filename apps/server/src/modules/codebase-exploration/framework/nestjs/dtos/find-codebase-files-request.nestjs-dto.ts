import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IFindCodebaseFilesRequestDto } from '../../../interaction/dtos/find-codebase-files-request.dto';

export class FindCodebaseFilesRequestNestjsDto
  implements IFindCodebaseFilesRequestDto
{
  @IsString()
  @IsNotEmpty()
  baseDirectoryAbsolutePath!: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  ignorePatterns?: string[];
}
