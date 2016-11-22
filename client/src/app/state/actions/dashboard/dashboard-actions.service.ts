import { Injectable } from '@angular/core';

import IAppState from '../../iAppState';
import { Store } from '@ngrx/store';
import ACTIONS from '../actions.constant';

@Injectable()
export class DashboardActionsService {

  constructor(private store: Store<IAppState>) { }
  employeePeriodChanged(period) {
    this.store.dispatch({
      type: ACTIONS.EMPLOYEE_PERIOD_CHANGED,
      payload: period
    });
  }
}
