import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiramtionDeleteComponent } from './confiramtion-delete.component';

describe('ConfiramtionDeleteComponent', () => {
  let component: ConfiramtionDeleteComponent;
  let fixture: ComponentFixture<ConfiramtionDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiramtionDeleteComponent]
    });
    fixture = TestBed.createComponent(ConfiramtionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
