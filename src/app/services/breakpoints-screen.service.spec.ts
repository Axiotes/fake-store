import { TestBed } from '@angular/core/testing';

import { BreakpointsScreenService } from './breakpoints-screen.service';

describe('BreakpointsScreenService', () => {
  let service: BreakpointsScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakpointsScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
