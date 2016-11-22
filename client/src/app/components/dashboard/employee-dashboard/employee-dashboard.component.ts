import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import IAssignedEmployee from '../../../interfaces/iAssignedEmployee';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  @Input() assignedEmployees: Array<IAssignedEmployee>;
  @Output() periodChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    // hard-coded initialization, since this is not an actual requirement
    this.periodChange.emit('q1-2016');
  }

  handlePeriodChange(evt) {
    this.periodChange.emit(evt.target.value);
  }
}
