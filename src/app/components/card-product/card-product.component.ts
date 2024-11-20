import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss',
})
export class CardProductComponent {
  @Input({ required: true })
  public image!: string;

  @Input({ required: true })
  public title!: string;

  @Input({ required: true })
  public rate!: number;

  @Input({ required: true })
  public count!: number;

  @Input({ required: true })
  public price!: number;
}
