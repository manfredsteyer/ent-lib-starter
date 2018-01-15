import { LoggerService } from './logger.service';
import { DefaultLogFormatterService } from './default-log-formatter.service';
import { LogFormatterService } from './log-formatter.service';
import { LoggerConfig } from './logger-config';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

export { LoggerService } from './logger.service';
export { DefaultLogFormatterService } from './default-log-formatter.service';
export { LogFormatterService } from './log-formatter.service';
export { LoggerConfig } from './logger-config';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class LoggerModule {
  static forRoot(config: LoggerConfig): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        { provide: LoggerConfig, useValue: config },
        { provide: LogFormatterService, useClass: DefaultLogFormatterService },
        LoggerService
      ]
    };
  }
}
