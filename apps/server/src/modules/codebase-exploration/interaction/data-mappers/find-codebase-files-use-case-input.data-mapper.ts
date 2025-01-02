import { FindCodebaseFilesUseCaseInput } from '../../application/use-cases/find-codebase-files.use-case';
import { IFindCodebaseFilesRequestDto } from '../dtos/find-codebase-files-request.dto';

export class FindCodebaseFilesUseCaseInputDataMapper {
  static toUseCaseInput(
    requestDto: IFindCodebaseFilesRequestDto,
  ): FindCodebaseFilesUseCaseInput {
    return {
      baseDirectoryAbsolutePath: requestDto.baseDirectoryAbsolutePath,
      ignorePatterns: requestDto.ignorePatterns,
    };
  }
}
