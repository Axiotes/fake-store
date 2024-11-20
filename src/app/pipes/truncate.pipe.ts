import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    if (value.length <= 65) {
      return value;
    }

    const valueTrucated = value.slice(0, 62);

    return `${valueTrucated}...`;
  }
}
