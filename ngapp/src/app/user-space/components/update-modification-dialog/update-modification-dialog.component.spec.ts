import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateModificationDialogComponent } from './update-modification-dialog.component';

describe('UpdateModificationDialogComponent', () => {
  let component: UpdateModificationDialogComponent;
  let fixture: ComponentFixture<UpdateModificationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateModificationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateModificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
