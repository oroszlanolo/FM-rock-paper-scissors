import { Directive, HostListener, ElementRef } from '@angular/core';

/**
 * This directive removes focus from the selectors after clicking on them
 */
@Directive({
  selector: 'button, a' // your selectors here!
})
export class FocusRemoverDirective {
  constructor(private elRef: ElementRef) {}

  @HostListener('click') onClick() {
    this.elRef.nativeElement.blur();
  }
}