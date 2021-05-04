import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appEventDirective]'
})
export class EventDirectiveDirective {
  isExpanded: boolean;

  constructor() { }

  @HostListener('mouseover') onMouseOver() {
    this.isExpanded = true;
    console.log("Mouse Enter");
  }

  @HostListener('mouseout') onMouseOut() {
    this.isExpanded = false;
    console.log("Mouse Out");
  }

}
