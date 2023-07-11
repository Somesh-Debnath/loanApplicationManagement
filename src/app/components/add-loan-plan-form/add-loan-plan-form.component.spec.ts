import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoanPlanFormComponent } from './add-loan-plan-form.component';

describe('AddLoanPlanFormComponent', () => {
  let component: AddLoanPlanFormComponent;
  let fixture: ComponentFixture<AddLoanPlanFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLoanPlanFormComponent]
    });
    fixture = TestBed.createComponent(AddLoanPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
