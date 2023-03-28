import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientRecordDialogComponent } from './add-client-record-dialog.component';

describe('AddClientRecordDialogComponent', () => {
  let component: AddClientRecordDialogComponent;
  let fixture: ComponentFixture<AddClientRecordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientRecordDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClientRecordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
