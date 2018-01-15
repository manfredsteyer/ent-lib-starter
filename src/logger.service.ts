import { LogFormatterService } from './log-formatter.service';
import { LoggerConfig } from './logger-config';
import { DefaultLogFormatterService } from './default-log-formatter.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    constructor(
        private formatter: LogFormatterService,
        private config: LoggerConfig
    ) {
    }

    log(message: string): void {
       console.info(this.formatter.format(message));
    }

    debug(message: string): void {
        if (!this.config.enableDebug) return;
        console.debug(this.formatter.format(message));
    }

}