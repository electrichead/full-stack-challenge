/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginActionsService } from './login-actions.service';

describe('Service: LoginActions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginActionsService]
    });
  });

  it('should ...', inject([LoginActionsService], (service: LoginActionsService) => {
    expect(service).toBeTruthy();
  }));
});
