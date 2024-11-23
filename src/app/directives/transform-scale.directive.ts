import { Directive } from '@angular/core';
import { ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appTransformScale]'
})
export class TransformScaleDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover') onMouseOver() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1.05)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.elementRef.nativeElement, 'transform');
  }
}
