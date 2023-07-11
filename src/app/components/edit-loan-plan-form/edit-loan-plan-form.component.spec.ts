import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLoanPlanFormComponent } from './edit-loan-plan-form.component';

describe('EditLoanPlanFormComponent', () => {
  let component: EditLoanPlanFormComponent;
  let fixture: ComponentFixture<EditLoanPlanFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLoanPlanFormComponent]
    });
    fixture = TestBed.createComponent(EditLoanPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
