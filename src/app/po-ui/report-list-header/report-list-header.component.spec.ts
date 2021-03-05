import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportListHeaderComponent } from './report-list-header.component';

describe('ReportListHeaderComponent', () => {
  let component: ReportListHeaderComponent;
  let fixture: ComponentFixture<ReportListHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
