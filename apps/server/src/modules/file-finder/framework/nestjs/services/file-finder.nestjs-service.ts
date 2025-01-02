import { Injectable } from '@nestjs/common';
import { FileFinderService } from '../../../infrastructure/services/file-finder.service';

@Injectable()
export class FileFinderNestJsService extends FileFinderService {}
