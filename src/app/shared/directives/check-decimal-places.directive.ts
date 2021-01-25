import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 * NOTE: Works only in text inputs
 */
@Directive({
  selector: '[appCheckDecimalPlaces]',
})
export class CheckDecimalPlacesDirective {
  @Input('appCheckDecimalPlaces') decimalPlaces: number;

  private regex: RegExp;
  private specialKeys: Array<string> = [
    'Backspace',
    'Tab',
    'End',
    'Home',
    'ArrowLeft',
    'ArrowRight',
    'Del',
    'Delete',
    'F12',
  ];
  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    this.createDecimalPlacesRegex();

    if (this.validateSpecialKeys(event)) return;

    let current: string = this.el.nativeElement.value;
    const position = this.el.nativeElement.selectionStart;
    const next: string = [
      current.slice(0, position),
      event.key == 'Decimal' ? ',' : event.key,
      current.slice(position),
    ].join('');

    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

  createDecimalPlacesRegex(): void {
    // Initialize decimal places
    if (!this.decimalPlaces) {
      this.decimalPlaces = 2;
    }
    this.regex = new RegExp(`^\\d*\\,?\\d{0,${this.decimalPlaces}}$`);
  }

  validateSpecialKeys(event: KeyboardEvent): boolean {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return true;
    }
    return false;
  }
}
