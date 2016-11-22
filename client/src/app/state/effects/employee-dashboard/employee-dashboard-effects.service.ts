
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import IWrappedAppState from '../../iWrappedAppState';

import ACTIONS from '../../actions/actions.constant';

@Injectable()
export class EmployeeDashboardEffectsService {
  employeeId$: Observable<number>;

  @Effect() employeePeriodChange$ = this.actions$
    .ofType(ACTIONS.EMPLOYEE_PERIOD_CHANGED)
    .map(action => action.payload)
    .switchMap((period) => {
      let _employeeId;

      this.employeeId$.take(1).subscribe(employeeId => {
        _employeeId = employeeId;
      });

      return this.http.get(`http://localhost:9090/api/v1/reviewers/${_employeeId}/period/${period}`)
        .map(res => ({ type: ACTIONS.EMPLOYEE_PERIOD_CHANGE_FROM_SERVER_SUCCESS, payload: res.json() }))
        .catch(() => Observable.of({ type: ACTIONS.EMPLOYEE_PERIOD_CHANGE_FROM_SERVER_FAILED}));
    });

    constructor(
      private http: Http,
      private actions$: Actions,
      private store: Store<IWrappedAppState>
  ) {
    this.employeeId$ = store.select((state: IWrappedAppState) => state.app.userInfo.employeeInfo.id);
  }
}
