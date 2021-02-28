import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.less']
})
export class StructuralDirectiveComponent implements OnInit {
  condition: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleCondition() {
    this.condition = !this.condition
  }

}
