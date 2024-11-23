import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeColorDirective } from './change-color.directive';

@NgModule({
  declarations: [
    ChangeColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChangeColorDirective
  ]
})
export class DirectivesModule { }
