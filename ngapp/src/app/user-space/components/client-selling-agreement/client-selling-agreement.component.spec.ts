import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSellingAgreementComponent } from './client-selling-agreement.component';

describe('ClientSellingAgreementComponent', () => {
  let component: ClientSellingAgreementComponent;
  let fixture: ComponentFixture<ClientSellingAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSellingAgreementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSellingAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
