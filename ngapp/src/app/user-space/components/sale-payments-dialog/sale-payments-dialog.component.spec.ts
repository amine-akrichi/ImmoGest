import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePaymentsDialogComponent } from './sale-payments-dialog.component';

describe('SalePaymentsDialogComponent', () => {
  let component: SalePaymentsDialogComponent;
  let fixture: ComponentFixture<SalePaymentsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalePaymentsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalePaymentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
