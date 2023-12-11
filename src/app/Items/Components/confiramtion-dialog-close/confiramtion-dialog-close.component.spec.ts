import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiramtionDialogCloseComponent } from './confiramtion-dialog-close.component';

describe('ConfiramtionDialogCloseComponent', () => {
  let component: ConfiramtionDialogCloseComponent;
  let fixture: ComponentFixture<ConfiramtionDialogCloseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiramtionDialogCloseComponent]
    });
    fixture = TestBed.createComponent(ConfiramtionDialogCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
