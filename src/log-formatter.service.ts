import { Injectable } from '@angular/core';

@Injectable()
export abstract class LogFormatterService {

    abstract format(message: string): string;

}
