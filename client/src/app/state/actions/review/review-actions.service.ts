import { Injectable } from '@angular/core';

import IAppState from '../../iAppState';
import { Store } from '@ngrx/store';
import ACTIONS from '../actions.constant';

@Injectable()
export class ReviewActionsService {

  constructor(private store: Store<IAppState>) { }

  reviewSubmitted(reviewText) {
    this.store.dispatch({
      type: ACTIONS.REVIEW_SUBMITTED,
      payload: reviewText
    });
  }

  createReview(employeeReviewData) {
    this.store.dispatch({
      type: ACTIONS.REVIEW_CLICKED_CREATE,
      payload: employeeReviewData
    });
  }

  editReview(employeeReviewData) {
    this.store.dispatch({
      type: ACTIONS.REVIEW_CLICKED_EDIT,
      payload: employeeReviewData
    });
  }
}
