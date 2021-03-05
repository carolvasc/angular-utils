import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonalizedModalComponent } from './personalized-modal.component';

describe('PersonalizedModalComponent', () => {
  let component: PersonalizedModalComponent;
  let fixture: ComponentFixture<PersonalizedModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
