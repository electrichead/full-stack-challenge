import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';
import IWrappedAppState from '../../state/iWrappedAppState';
import IAssignedEmployee from '../../interfaces/iAssignedEmployee';

import { DashboardActionsService } from '../../state/actions/dashboard/dashboard-actions.service';
import { ReviewActionsService } from '../../state/actions/review/review-actions.service';

@Component({
  selector: 'app-dashboard-section',
  templateUrl: './dashboard-section.component.html',
  styleUrls: ['./dashboard-section.component.css']
})
export class DashboardSectionComponent implements OnInit {
  public name$: Observable<String>;
  public isAdmin$: Observable<Boolean>;
  public assignedEmployees$: Observable<Array<IAssignedEmployee>>;

  constructor(
    private dashboardActions: DashboardActionsService,
    private reviewActions: ReviewActionsService,
    private store: Store<IWrappedAppState>
  ) {
    this.name$ = store.select((state) => state.app.userInfo.employeeInfo.name);
    this.isAdmin$ = store.select((state) => state.app.userInfo.employeeInfo.isAdmin);
    this.assignedEmployees$ = store.select((state) => state.app.assignedEmployees);
  }

  ngOnInit() {
  }

  handleEmployeePeriodChange(period) {
    this.dashboardActions.employeePeriodChanged(period);
  }

  handleEditReviewClicked(employeeReviewData) {
    this.reviewActions.editReview(employeeReviewData);
  }

  handleCreateReviewClicked(employeeReviewData) {
    this.reviewActions.createReview(employeeReviewData);
  }

}
