import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppartementDialogComponent } from './create-appartement-dialog.component';

describe('CreateAppartementDialogComponent', () => {
  let component: CreateAppartementDialogComponent;
  let fixture: ComponentFixture<CreateAppartementDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAppartementDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAppartementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
