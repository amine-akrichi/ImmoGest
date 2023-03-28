import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppartementDialogComponent } from './update-appartement-dialog.component';

describe('UpdateAppartementDialogComponent', () => {
  let component: UpdateAppartementDialogComponent;
  let fixture: ComponentFixture<UpdateAppartementDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppartementDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAppartementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
