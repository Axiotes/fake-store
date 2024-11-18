import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product/card-product.component';
import { PricePipe } from '../pipes/price.pipe';

@NgModule({
  declarations: [
    CardProductComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }
