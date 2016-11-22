/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DashboardActionsService } from './dashboard-actions.service';

describe('Service: DashboardActions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardActionsService]
    });
  });

  it('should ...', inject([DashboardActionsService], (service: DashboardActionsService) => {
    expect(service).toBeTruthy();
  }));
});
