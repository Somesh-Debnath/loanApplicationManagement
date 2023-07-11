import { TestBed } from '@angular/core/testing';

import { LoanplanService } from './loanplan.service';

describe('LoanplanService', () => {
  let service: LoanplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
