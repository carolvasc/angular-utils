import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerContentTemplateComponent } from './container-content-template.component';

describe('ContainerContentTemplateComponent', () => {
  let component: ContainerContentTemplateComponent;
  let fixture: ComponentFixture<ContainerContentTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerContentTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerContentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
