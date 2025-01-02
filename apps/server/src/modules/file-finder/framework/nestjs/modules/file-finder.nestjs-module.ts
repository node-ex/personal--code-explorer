import { Module } from '@nestjs/common';
import { FileFinderNestjsService } from '../services/file-finder.nestjs-service';
import { FileFinderService } from '../../../infrastructure/services/file-finder.service';

@Module({
  imports: [],
  providers: [
    FileFinderNestjsService,
    {
      provide: FileFinderService,
      useExisting: FileFinderNestjsService,
    },
  ],
  exports: [FileFinderService],
})
export class FileFinderModule {}
