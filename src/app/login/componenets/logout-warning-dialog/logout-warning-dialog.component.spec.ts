import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutWarningDialogComponent } from './logout-warning-dialog.component';

describe('LogoutWarningDialogComponent', () => {
  let component: LogoutWarningDialogComponent;
  let fixture: ComponentFixture<LogoutWarningDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutWarningDialogComponent]
    });
    fixture = TestBed.createComponent(LogoutWarningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
