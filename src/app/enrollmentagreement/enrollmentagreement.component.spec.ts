import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentagreementComponent } from './enrollmentagreement.component';

describe('EnrollmentagreementComponent', () => {
  let component: EnrollmentagreementComponent;
  let fixture: ComponentFixture<EnrollmentagreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentagreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentagreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
