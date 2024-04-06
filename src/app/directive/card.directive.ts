import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCard]',
  standalone: true
})
export class CardDirective {

  constructor(public eleref : ElementRef) { 
    this.eleref.nativeElement.style.borderRadius='20%'
  }
  @HostListener('mouseover') fun1(){
    this.eleref.nativeElement.style.borderRadius='50%'
  }
  @HostListener('mouseout')fun2(){
    this.eleref.nativeElement.style.borderRadius='20%'
  }
}
