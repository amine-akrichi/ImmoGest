import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientClaimDialogComponent } from './add-client-claim-dialog.component';

describe('AddClientClaimDialogComponent', () => {
  let component: AddClientClaimDialogComponent;
  let fixture: ComponentFixture<AddClientClaimDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientClaimDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClientClaimDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
