import {
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgZone,
  Output,
} from '@angular/core';

function debounce<F extends (...args: any[]) => void>(
  f: F,
  timeout: number,
  target?: any
): F {
  let timer: number | undefined = undefined;
  return function (this: any, ...args: any[]) {
    target = target || this;

    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      f.apply(target, args);
    }, timeout) as any;
  } as F;
}

@Directive({
  selector: '[appWindowResize]',
  host: {
    '(window:resize)': 'onResize()',
  },
})
export class WindowResizeDirective {
  @Input() appWindowResize: number[] = [0];
  @Output()
  windowWidthChanged: EventEmitter<number> = new EventEmitter<number>();

  private widthIndex: number = -1;
  private onResize = debounce(() => {
    const offsetWidth = this.getWidth();
    let widthIndex = this.appWindowResize.findIndex(
      (width) => width > offsetWidth
    );
    widthIndex =
      (widthIndex + this.appWindowResize.length + 1) %
      (this.appWindowResize.length + 1);

    if (this.widthIndex != widthIndex) {
      this.widthIndex = widthIndex;
      this.zone.run(() => {
        this.windowWidthChanged.emit(widthIndex);
      });
    }
  }, 200);

  constructor(private elementRef: ElementRef, private zone: NgZone) {
    this.onResize();
  }

  getWidth(): number {
    return this.elementRef.nativeElement.offsetWidth;
  }
}
