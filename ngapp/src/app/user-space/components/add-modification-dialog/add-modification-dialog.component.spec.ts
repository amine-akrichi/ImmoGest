import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModificationDialogComponent } from './add-modification-dialog.component';

describe('AddModificationDialogComponent', () => {
  let component: AddModificationDialogComponent;
  let fixture: ComponentFixture<AddModificationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModificationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
