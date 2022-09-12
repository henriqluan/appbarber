import { TestBed } from '@angular/core/testing';

import { RolesPageGuard } from './roles-page.guard';

describe('RolesPageGuard', () => {
  let guard: RolesPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RolesPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
