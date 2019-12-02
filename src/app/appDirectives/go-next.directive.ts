import { Directive, Input, HostListener, ElementRef } from '@angular/core';

declare var $: any;
@Directive({
  selector: '[appGoNext]'
})
export class GoNextDirective {
  @Input('appGoNext') goNextId: string;
  @HostListener('click')
  click() {
    var offsetTop = document.getElementById(this.goNextId).offsetTop;
    $('body,html').animate({
      scrollTop: offsetTop - 100
    }, 500)
  }

  constructor(el: ElementRef) { }

}
