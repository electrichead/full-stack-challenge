import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Headers, RequestOptions } from '@angular/http';
import IWrappedAppState from '../../iWrappedAppState';
import ICurrentReview from '../../../interfaces/iCurrentReview';

import ACTIONS from '../../actions/actions.constant';

@Injectable()
export class ReviewEffectsService {
  period$: Observable<string>;
  currentReview$: Observable<ICurrentReview>;
  reviewerId$: Observable<number>;

  @Effect() employeePeriodChange$ = this.actions$
    .ofType(ACTIONS.REVIEW_SUBMITTED)
    .map(action => action.payload)
    .switchMap((reviewContent) => {
      let _appState;

      // this runs synchronously
      this.store.select((state: IWrappedAppState) => {
        return {
          employeeId: state.app.currentReview.employeeId,
          reviewerId: state.app.userInfo.employeeInfo.id,
          period: state.app.currentPeriod,
          isCreating: state.app.currentReview.isCreating,
          reviewId: state.app.currentReview.reviewId,
          token: state.app.userInfo.token
        };
      })
      .take(1)
      .subscribe(appState => {
        _appState = appState;
      });

      let createEditPromise;
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `JWT ${_appState.token}`
      });

      let options = new RequestOptions({ headers: headers });

      if (_appState.isCreating) {
        createEditPromise = this.http.post(
          'http://localhost:9090/api/v1/' +
          `employees/${_appState.employeeId}/period/${_appState.period}/reviewers/${_appState.reviewerId}/reviews`,
          { reviewContent },
          options
        );
      } else {
        createEditPromise = this.http.put(
          'http://localhost:9090/api/v1/' +
          `reviews/${_appState.reviewId}`,
          { reviewContent },
          options
        );
      }

      return createEditPromise
        .map(res => ({ type: ACTIONS.REMOTE_REVIEW_SUBMITTED_SUCCESS, payload: res.json() }))
        .catch(() => Observable.of({ type: ACTIONS.REMOTE_REVIEW_SUBMITTED_FAILED}));
    });

  /**
   * When the user wishes to edit review, we fetch the existing review and reset state
   *
   * @memberOf ReviewEffectsService
   */
  @Effect() editReviewClick$ = this.actions$
    .ofType(ACTIONS.REVIEW_CLICKED_EDIT)
    .map(action => action.payload)
    .switchMap((employeeReviewDetails) => {
      return this.http.get(
          'http://localhost:9090/api/v1/' +
          `reviews/${employeeReviewDetails.reviewId}`
        )
        .map(res => ({ type: ACTIONS.REMOTE_REVIEW_CONTENT_SUCCESS, payload: res.json() }))
        .catch(() => Observable.of({ type: ACTIONS.REMOTE_REVIEW_CONTENT_FAILED}));
    });

  @Effect({dispatch: false}) reviewCreateClicked$ = this.actions$
    .ofType(ACTIONS.REVIEW_CLICKED_CREATE)
    .map(action => action.payload)
    .do(() => {
      this.router.navigate(['/review']);
    });

  @Effect({dispatch: false}) remoteReviewContentSuccess$ = this.actions$
    .ofType(ACTIONS.REMOTE_REVIEW_CONTENT_SUCCESS)
    .map(action => action.payload)
    .do((currentReviewDetails) => {
      this.router.navigate(['/review', currentReviewDetails.id]);
    });

  @Effect({dispatch: false}) remoteReviewSubmittedSuccess$ = this.actions$
    .ofType(ACTIONS.REMOTE_REVIEW_SUBMITTED_SUCCESS)
    .map(action => action.payload)
    .do((currentReviewDetails) => {
      this.router.navigate(['/dashboard']);
    });

  constructor(
    private http: Http,
    private actions$: Actions,
    private router: Router,
    private store: Store<IWrappedAppState>
  ) {
    this.period$ = store.select((state: IWrappedAppState) => state.app.currentPeriod);
    this.currentReview$ = store.select((state: IWrappedAppState) => state.app.currentReview);
    this.reviewerId$ = store.select((state: IWrappedAppState) => state.app.userInfo.employeeInfo.id);
  }
}
