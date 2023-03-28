import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleModificationDialogComponent } from './sale-modification-dialog.component';

describe('SaleModificationDialogComponent', () => {
  let component: SaleModificationDialogComponent;
  let fixture: ComponentFixture<SaleModificationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleModificationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleModificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
