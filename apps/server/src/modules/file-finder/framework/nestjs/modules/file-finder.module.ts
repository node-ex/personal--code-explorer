import { Module } from '@nestjs/common';
import { FileFinderNestJsService } from '../services/file-finder.nestjs-service';

@Module({
  imports: [],
  providers: [FileFinderNestJsService],
  exports: [FileFinderNestJsService],
})
export class FileFinderModule {}
