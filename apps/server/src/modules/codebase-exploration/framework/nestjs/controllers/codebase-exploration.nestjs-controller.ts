import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { FindCodebaseFilesUseCase } from '../../../application/use-cases/find-codebase-files.use-case';
import { CodebaseExplorationController } from '../../../interaction/controllers/codebase-exploration.controller';
import { IFindCodebaseFilesRequestDto } from '../../../interaction/dtos/find-codebase-files-request.dto';

@Controller('codebase-exploration')
export class CodebaseExplorationNestjsController extends CodebaseExplorationController {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(findCodebaseFilesUseCase: FindCodebaseFilesUseCase) {
    super(findCodebaseFilesUseCase);
  }

  @Post('files/find')
  @HttpCode(200)
  override async findCodebaseFiles(
    @Body() findCodebaseFilesRequestDto: IFindCodebaseFilesRequestDto,
  ): Promise<void> {
    await super.findCodebaseFiles(findCodebaseFilesRequestDto);
  }
}
