import { Injectable } from '@nestjs/common';
import { FileFinderService } from '../../../infrastructure/services/file-finder.service';

@Injectable()
export class FileFinderNestjsService extends FileFinderService {}
