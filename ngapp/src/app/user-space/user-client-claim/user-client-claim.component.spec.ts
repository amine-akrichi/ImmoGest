import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClientClaimComponent } from './user-client-claim.component';

describe('UserClientClaimComponent', () => {
  let component: UserClientClaimComponent;
  let fixture: ComponentFixture<UserClientClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserClientClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserClientClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
