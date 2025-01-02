import { promises as fs } from 'fs';
import * as path from 'path';
import ignore from 'ignore';

export class FileFinderService {
  public async *yieldDeeplyNestedDirectoryFiles(
    baseDirectoryAbsolutePath: string,
    // For the root directory - ['node_modules', '.git', '*.log']
    // For the src directory - ['*', '!**/*.ts']
    ignorePatterns: string[] = [],
  ): AsyncGenerator<string> {
    if (!path.isAbsolute(baseDirectoryAbsolutePath)) {
      throw new Error('baseDirectoryPath must be an absolute path');
    }

    const isFileIgnoredFn = this.createIsFileIgnoredFn(
      baseDirectoryAbsolutePath,
      ignorePatterns,
    );
    yield* this.yieldDirectoryFilesRecursively(
      baseDirectoryAbsolutePath,
      isFileIgnoredFn,
    );
  }

  private createIsFileIgnoredFn(
    baseDirectoryAbsolutePath: string,
    ignorePatterns: string[] = [],
  ): (fileAbsolutePath: string) => boolean {
    const ig = ignore().add([...ignorePatterns]);
    const isFileIgnoredFn = (fileAbsolutePath: string): boolean => {
      const checkedRelativePath = path.relative(
        baseDirectoryAbsolutePath,
        fileAbsolutePath,
      );
      // Do not ignore the root directory
      if (!checkedRelativePath) {
        return false;
      }

      return ig.ignores(checkedRelativePath);
    };

    return isFileIgnoredFn;
  }

  private async *yieldDirectoryFilesRecursively(
    directoryAbsolutePath: string,
    isFileIgnoredFn: (filePath: string) => boolean,
  ): AsyncGenerator<string> {
    if (isFileIgnoredFn(directoryAbsolutePath)) {
      return;
    }

    const directoryFiles = await fs.readdir(directoryAbsolutePath, {
      withFileTypes: true,
    });

    for (const file of directoryFiles) {
      const fileAbsolutePath = path.join(directoryAbsolutePath, file.name);

      if (isFileIgnoredFn(fileAbsolutePath)) {
        continue;
      }

      if (file.isDirectory()) {
        yield* this.yieldDirectoryFilesRecursively(
          fileAbsolutePath,
          isFileIgnoredFn,
        );
      } else {
        yield fileAbsolutePath;
      }
    }
  }
}
