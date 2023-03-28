import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailsEditComponent } from './admin-details-edit.component';

describe('AdminDetailsEditComponent', () => {
  let component: AdminDetailsEditComponent;
  let fixture: ComponentFixture<AdminDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetailsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
