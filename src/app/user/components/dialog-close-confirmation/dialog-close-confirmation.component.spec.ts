import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCloseConfirmationComponent } from './dialog-close-confirmation.component';

describe('DialogCloseConfirmationComponent', () => {
  let component: DialogCloseConfirmationComponent;
  let fixture: ComponentFixture<DialogCloseConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCloseConfirmationComponent]
    });
    fixture = TestBed.createComponent(DialogCloseConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
