/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReviewEffectsService } from './review-effects.service';

describe('Service: ReviewEffects', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewEffectsService]
    });
  });

  it('should ...', inject([ReviewEffectsService], (service: ReviewEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
