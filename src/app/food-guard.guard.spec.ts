import { TestBed } from '@angular/core/testing';

import { FoodGuardGuard } from './food-guard.guard';

describe('FoodGuardGuard', () => {
  let guard: FoodGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FoodGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
