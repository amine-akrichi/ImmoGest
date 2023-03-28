import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppartementsListComponent } from './admin-appartements-list.component';

describe('AdminAppartementsListComponent', () => {
  let component: AdminAppartementsListComponent;
  let fixture: ComponentFixture<AdminAppartementsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAppartementsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAppartementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
