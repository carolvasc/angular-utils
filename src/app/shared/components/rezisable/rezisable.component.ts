import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rezisable',
  templateUrl: './rezisable.component.html',
  styleUrls: ['./rezisable.component.less'],
})
export class RezisableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public isReadOnly: boolean = false;
  public windowSizeBreakpoints = [300, 500];
  /**
   * The size options will be:
   * 0: <300
   * 1: 300-500
   * 2: 500+
   **/
  public sizeOption: number = 2;

  public setIsCompact(widthIdx) {
    this.sizeOption = widthIdx;
  }
}
