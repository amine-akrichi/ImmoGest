import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientRecordDialogComponent } from './update-client-record-dialog.component';

describe('UpdateClientRecordDialogComponent', () => {
  let component: UpdateClientRecordDialogComponent;
  let fixture: ComponentFixture<UpdateClientRecordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClientRecordDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClientRecordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
