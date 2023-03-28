import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClientsListComponent } from './user-clients-list.component';

describe('UserClientsListComponent', () => {
  let component: UserClientsListComponent;
  let fixture: ComponentFixture<UserClientsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserClientsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserClientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
