import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product/card-product.component';
import { LucideAngularModule } from 'lucide-angular';
import { PipesModule } from '../pipes/pipes.module';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    CardProductComponent,
    HeaderComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    LucideAngularModule,
    PipesModule
  ],
  exports: [
    CardProductComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
