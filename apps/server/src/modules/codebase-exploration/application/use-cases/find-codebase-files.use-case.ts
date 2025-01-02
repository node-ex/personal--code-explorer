import { FileFinderService } from '../../../file-finder/infrastructure/services/file-finder.service';
import { CodebaseFileEntity } from '../../domain/entities/codebase-file.entity';
import { ICodebaseFileRepositoryOutputPort } from '../repositories/codebase-file.repository-output-port';

export interface FindCodebaseFilesUseCaseInput {
  baseDirectoryAbsolutePath: string;
  ignorePatterns?: string[] | undefined;
}

export class FindCodebaseFilesUseCase {
  constructor(
    private readonly fileFinderService: FileFinderService,
    private readonly codebaseFileRepository: ICodebaseFileRepositoryOutputPort,
  ) {}

  async execute({
    baseDirectoryAbsolutePath,
    ignorePatterns = [],
  }: FindCodebaseFilesUseCaseInput): Promise<void> {
    const filePathsGenerator =
      this.fileFinderService.yieldDeeplyNestedDirectoryFiles(
        baseDirectoryAbsolutePath,
        ignorePatterns,
      );

    for await (const filePath of filePathsGenerator) {
      const existingCodebaseFile =
        await this.codebaseFileRepository.findByFilepath(filePath);
      if (existingCodebaseFile) {
        continue;
      }

      const codebaseFile = new CodebaseFileEntity(filePath);
      await this.codebaseFileRepository.save(codebaseFile);
    }
  }
}
