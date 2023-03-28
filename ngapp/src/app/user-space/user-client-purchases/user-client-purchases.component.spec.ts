import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClientPurchasesComponent } from './user-client-purchases.component';

describe('UserClientPurchasesComponent', () => {
  let component: UserClientPurchasesComponent;
  let fixture: ComponentFixture<UserClientPurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserClientPurchasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserClientPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
