import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trash2 } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss',
})
export class ProductCartComponent {
  @Output()
  public remove: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public alterQuantity: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public image!: string;

  @Input()
  public title!: string;

  @Input()
  public price!: number;

  @Input()
  public quantity!: number;

  public trash: LucideIconData = Trash2;

  public removeProduct(): void {
    this.remove.emit();
  }

  public alterQuantityProduct(value: string): void {
    this.alterQuantity.emit(value);
  }
}
