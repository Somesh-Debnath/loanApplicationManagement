import { TestBed } from '@angular/core/testing';

import { EditloanplanService } from './editloanplan.service';

describe('EditloanplanService', () => {
  let service: EditloanplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditloanplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
