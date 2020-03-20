import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsDialogComponentComponent } from './contact-us-dialog-component.component';

describe('ContactUsDialogComponentComponent', () => {
  let component: ContactUsDialogComponentComponent;
  let fixture: ComponentFixture<ContactUsDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
