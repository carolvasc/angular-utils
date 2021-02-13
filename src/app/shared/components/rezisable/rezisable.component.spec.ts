import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezisableComponent } from './rezisable.component';

describe('RezisableComponent', () => {
  let component: RezisableComponent;
  let fixture: ComponentFixture<RezisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezisableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
