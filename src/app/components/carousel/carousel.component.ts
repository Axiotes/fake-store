import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Product } from '../../../types/product.type';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;
  @Input({ required: true }) products!: Product[];

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.autoScroll();
  }

  public scrollLeft(): void {
    this.carousel.nativeElement.scrollLeft -=
      this.carousel.nativeElement.offsetWidth;
  }

  public scrollRight(): void {
    if (this.carousel.nativeElement.scrollLeft <= 5120) {
      this.carousel.nativeElement.scrollLeft +=
        this.carousel.nativeElement.offsetWidth;
    }
  }

  public autoScroll(): void {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.scrollRight();

        if (this.carousel.nativeElement.scrollLeft > 5120) {
          this.carousel.nativeElement.scrollLeft = 0;
        }
      }, 5000);
    });
  }
}
