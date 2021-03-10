import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-content-template',
  templateUrl: './container-content-template.component.html',
  styleUrls: ['./container-content-template.component.less'],
})
export class ContainerContentTemplateComponent implements OnInit {
  private totalEstimate = 10;
  ctx = {
    estimate: this.totalEstimate,
  };

  secondCtx = {
    $implicit: 'Implicit context',
    value: 'Variable that can be use',
  };

  constructor() {}

  ngOnInit(): void {}
}
