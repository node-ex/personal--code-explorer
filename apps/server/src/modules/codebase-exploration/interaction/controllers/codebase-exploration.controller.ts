import { FindCodebaseFilesUseCase } from '../../application/use-cases/find-codebase-files.use-case';
import { FindCodebaseFilesUseCaseInputDataMapper } from '../data-mappers/find-codebase-files-use-case-input.data-mapper';
import { IFindCodebaseFilesRequestDto } from '../dtos/find-codebase-files-request.dto';

export class CodebaseExplorationController {
  constructor(
    private readonly findCodebaseFilesUseCase: FindCodebaseFilesUseCase,
  ) {}

  async findCodebaseFiles(input: IFindCodebaseFilesRequestDto): Promise<void> {
    const useCaseInput =
      FindCodebaseFilesUseCaseInputDataMapper.toUseCaseInput(input);
    await this.findCodebaseFilesUseCase.execute(useCaseInput);
  }
}
