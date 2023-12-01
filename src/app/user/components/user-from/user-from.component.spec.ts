import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFromComponent } from './user-from.component';

describe('UserFromComponent', () => {
  let component: UserFromComponent;
  let fixture: ComponentFixture<UserFromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFromComponent]
    });
    fixture = TestBed.createComponent(UserFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
