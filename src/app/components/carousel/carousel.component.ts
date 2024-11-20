import { Component, Input } from '@angular/core';
import { Product } from '../../../types/product.type';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input({ required: true }) products!: Product[];
}
