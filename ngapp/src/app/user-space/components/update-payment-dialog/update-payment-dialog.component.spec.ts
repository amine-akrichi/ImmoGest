import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentDialogComponent } from './update-payment-dialog.component';

describe('UpdatePaymentDialogComponent', () => {
  let component: UpdatePaymentDialogComponent;
  let fixture: ComponentFixture<UpdatePaymentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePaymentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
