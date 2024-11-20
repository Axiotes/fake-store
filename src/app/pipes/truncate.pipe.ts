import { Pipe, PipeTransform } from '@angular/core';
import { BreakpointsScreenService } from '../services/breakpoints-screen.service';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  constructor(private breakpointsScreenService: BreakpointsScreenService) {}

  transform(value: string): string {
    if (!value) {
      return '';
    }

    const screenSize = this.breakpointsScreenService.screenSize;

    switch (screenSize) {
      case '(max-width: 599.98px)': 
      case '(min-width: 600px) and (max-width: 959.98px)': {
        if (value.length <= 38) {
          return value;
        }

        const valueTrucated = value.slice(0, 35);

        return `${valueTrucated}...`;
      }
      default: {
        if (value.length <= 65) {
          return value;
        }

        const valueTrucated = value.slice(0, 62);

        return `${valueTrucated}...`;
      }
    }
  }
}
