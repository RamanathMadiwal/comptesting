import { TestBed } from '@angular/core/testing';

import { SlingshotService } from './slingshot.service';

describe('SlingshotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlingshotService = TestBed.get(SlingshotService);
    expect(service).toBeTruthy();
  });
});
