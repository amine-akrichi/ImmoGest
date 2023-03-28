import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClientLogComponent } from './user-client-log.component';

describe('UserClientLogComponent', () => {
  let component: UserClientLogComponent;
  let fixture: ComponentFixture<UserClientLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserClientLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserClientLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
