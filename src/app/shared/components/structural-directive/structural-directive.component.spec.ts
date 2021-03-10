import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StructuralDirectiveComponent } from './structural-directive.component';

describe('StructuralDirectiveComponent', () => {
  let component: StructuralDirectiveComponent;
  let fixture: ComponentFixture<StructuralDirectiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
