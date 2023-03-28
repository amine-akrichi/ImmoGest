import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientClaimDialogComponent } from './update-client-claim-dialog.component';

describe('UpdateClientClaimDialogComponent', () => {
  let component: UpdateClientClaimDialogComponent;
  let fixture: ComponentFixture<UpdateClientClaimDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClientClaimDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClientClaimDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
