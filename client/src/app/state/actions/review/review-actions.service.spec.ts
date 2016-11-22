/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReviewActionsService } from './review-actions.service';

describe('Service: ReviewActions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewActionsService]
    });
  });

  it('should ...', inject([ReviewActionsService], (service: ReviewActionsService) => {
    expect(service).toBeTruthy();
  }));
});
