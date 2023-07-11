import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankManagerLoginComponent } from './bank-manager-login.component';

describe('BankManagerLoginComponent', () => {
  let component: BankManagerLoginComponent;
  let fixture: ComponentFixture<BankManagerLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankManagerLoginComponent]
    });
    fixture = TestBed.createComponent(BankManagerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
