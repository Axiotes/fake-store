import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(price: number): string {
    if (!price) {
      return '';
    }

    const strPrice = price.toString();
    const priceArray = strPrice.split('.');

    if (!priceArray[1]) {
      return `US$ ${priceArray[0]},00`;
    }

    return `US$ ${priceArray[0]},${priceArray[1]}`;
  }
}
