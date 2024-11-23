import { Directive } from '@angular/core';
import { ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
})
export class ChangeColorDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover') onMouseOver() {
    this.changeColor('#003366', 'white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null, null);
  }

  private changeColor(bgColor: string | null, color: string | null) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', bgColor);
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
  }
}
