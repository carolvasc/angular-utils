import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithPageDefaultComponent } from './list-with-page-default.component';

describe('ListWithPageDefaultComponent', () => {
  let component: ListWithPageDefaultComponent;
  let fixture: ComponentFixture<ListWithPageDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWithPageDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithPageDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
