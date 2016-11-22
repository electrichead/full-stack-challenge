import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import IWrappedAppState from '../../state/iWrappedAppState';
import { ReviewActionsService } from '../../state/actions/review/review-actions.service';

@Component({
  selector: 'app-review-section',
  templateUrl: './review-section.component.html',
  styleUrls: ['./review-section.component.css']
})

export class ReviewSectionComponent implements OnInit {
  public reviewContent$: Observable<string>;

  constructor(
    private ReviewActions: ReviewActionsService,
    private store: Store<IWrappedAppState>
  ) {
    this.reviewContent$ = store.select((state) => state.app.currentReview.reviewContent);
  }

  ngOnInit() {
  }

  handleReviewSubmitted(review) {
    this.ReviewActions.reviewSubmitted(review);
  }
}
