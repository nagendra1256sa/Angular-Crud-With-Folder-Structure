import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDeletionComponent } from './confirmation-deletion.component';

describe('ConfirmationDeletionComponent', () => {
  let component: ConfirmationDeletionComponent;
  let fixture: ComponentFixture<ConfirmationDeletionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationDeletionComponent]
    });
    fixture = TestBed.createComponent(ConfirmationDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
