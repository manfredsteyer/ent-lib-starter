import { LogFormatterService } from './log-formatter.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DefaultLogFormatterService implements LogFormatterService {

    public format(message: string): string {
        return message;
    }
}
