import { TestBed } from '@angular/core/testing';

import { AddLoanPlanService } from './add-loan-plan.service';

describe('AddLoanPlanService', () => {
  let service: AddLoanPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddLoanPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
