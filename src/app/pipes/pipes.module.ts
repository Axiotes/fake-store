import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from './price.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    PricePipe,
    TruncatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PricePipe,
    TruncatePipe
  ]
})
export class PipesModule { }
