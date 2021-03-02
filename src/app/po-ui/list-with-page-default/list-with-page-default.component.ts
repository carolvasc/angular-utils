import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-list-with-page-default',
  templateUrl: './list-with-page-default.component.html',
  styleUrls: ['./list-with-page-default.component.less'],
})
export class ListWithPageDefaultComponent implements OnInit {
  pageActions: PoPageAction[] = [];
  persons = [];

  advancedSearchForm = this.formBuilder.group({
    filter: [null],
    appraiserName: [null],
    appraisedName: [null],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    for (let i = 0; i <= 10; i++) {
      this.persons.push({
        id: i,
        name: `Pessoa ${i}`,
        email: `pessoa${i}@gmail.com`,
        position: `Cargo ${i}`,
      });
    }
  }
}
