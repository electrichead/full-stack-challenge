/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeDashboardEffectsService } from './employee-dashboard-effects.service';

describe('Service: EmployeeDashboardEffects', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeDashboardEffectsService]
    });
  });

  it('should ...', inject([EmployeeDashboardEffectsService], (service: EmployeeDashboardEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
