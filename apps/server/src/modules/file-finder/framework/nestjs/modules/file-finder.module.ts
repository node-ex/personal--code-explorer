import { Module } from '@nestjs/common';
import { FileFinderNestJsService } from '../services/file-finder.nestjs-service';
import { FileFinderService } from '../../../infrastructure/services/file-finder.service';

@Module({
  imports: [],
  providers: [FileFinderNestJsService],
  exports: [
    {
      provide: FileFinderService,
      useExisting: FileFinderNestJsService,
    },
  ],
})
export class FileFinderModule {}
