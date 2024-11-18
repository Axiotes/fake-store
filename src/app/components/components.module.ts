import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product/card-product.component';
import { LucideAngularModule } from 'lucide-angular';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    CardProductComponent,
  ],
  imports: [
    CommonModule,
    LucideAngularModule,
    PipesModule
  ],
  exports: [
    CardProductComponent,
  ]
})
export class ComponentsModule { }
