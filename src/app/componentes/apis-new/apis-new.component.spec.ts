import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApisNewComponent } from './apis-new.component';

describe('ApisNewComponent', () => {
  let component: ApisNewComponent;
  let fixture: ComponentFixture<ApisNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApisNewComponent]
    });
    fixture = TestBed.createComponent(ApisNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
