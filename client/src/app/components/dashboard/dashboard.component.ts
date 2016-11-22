import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';
import IWrappedAppState from '../../state/iWrappedAppState';
import IAssignedEmployee from '../../interfaces/iAssignedEmployee';

import { DashboardActionsService } from '../../state/actions/dashboard/dashboard-actions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public name$: Observable<String>;
  public isAdmin$: Observable<Boolean>;
  public assignedEmployees$: Observable<Array<IAssignedEmployee>>;

  constructor(
    private dashboardActions: DashboardActionsService,
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
}
