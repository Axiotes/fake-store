import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product/card-product.component';
import { LucideAngularModule } from 'lucide-angular';
import { PipesModule } from '../pipes/pipes.module';
import { HeaderComponent } from './header/header.component';
import { RouterLink } from '@angular/router';
import { CardCategoryComponent } from './card-category/card-category.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductCartComponent } from './product-cart/product-cart.component';

@NgModule({
  declarations: [
    CardProductComponent,
    HeaderComponent,
    CardCategoryComponent,
    CarouselComponent,
    ProductCartComponent,
  ],
  imports: [
    CommonModule,
    LucideAngularModule,
    PipesModule,
    RouterLink
  ],
  exports: [
    CardProductComponent,
    HeaderComponent,
    CardCategoryComponent,
    CarouselComponent,
    ProductCartComponent,
  ]
})
export class ComponentsModule { }
