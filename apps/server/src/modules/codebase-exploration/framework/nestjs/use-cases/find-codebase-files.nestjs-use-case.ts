import { Inject, Injectable } from '@nestjs/common';
import { FindCodebaseFilesUseCase } from '../../../application/use-cases/find-codebase-files.use-case';
import { FileFinderService } from '../../../../file-finder/infrastructure/services/file-finder.service';
import { ICodebaseFileRepositoryOutputPort } from '../../../application/repositories/codebase-file.repository-output-port';

@Injectable()
export class FindCodebaseFilesNestjsUseCase extends FindCodebaseFilesUseCase {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(
    fileFinderService: FileFinderService,
    @Inject(ICodebaseFileRepositoryOutputPort)
    codebaseFileRepository: ICodebaseFileRepositoryOutputPort,
  ) {
    super(fileFinderService, codebaseFileRepository);
  }
}
