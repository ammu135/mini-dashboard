import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    this._highlight();

  }

  _highlight() {
    this.el.nativeElement.style.color = 'blue';
    this.el.nativeElement.style.background = '#fffcbb';
    const temp = this.el.nativeElement.innerText;
    this.el.nativeElement.innerHTML = '<em>' + temp + '</em>';
  }

}
