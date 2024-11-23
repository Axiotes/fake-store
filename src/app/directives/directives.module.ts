import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeColorDirective } from './change-color.directive';
import { TransformScaleDirective } from './transform-scale.directive';

@NgModule({
  declarations: [
    ChangeColorDirective,
    TransformScaleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChangeColorDirective,
    TransformScaleDirective
  ]
})
export class DirectivesModule { }
