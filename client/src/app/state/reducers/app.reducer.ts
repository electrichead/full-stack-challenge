import { ActionReducer, Action } from '@ngrx/store';
import IAppState from '../iAppState';

import ACTIONS from '../actions/actions.constant';

const defaultAppState = {
    userInfo: {
      employeeInfo: {
        id: 0,
        name: '',
        isAdmin: false
      },
      token: ''
    },
    currentPeriod: 'q1-2016',
    assignedEmployees: []
};

export const appReducer: ActionReducer<IAppState> = (state: IAppState = defaultAppState, action: Action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return Object.assign({}, state, {
        userInfo: action.payload
      });

    case ACTIONS.EMPLOYEE_PERIOD_CHANGED:
      return Object.assign({}, state, {
        currentPeriod: action.payload
      });

    case ACTIONS.EMPLOYEE_PERIOD_CHANGE_FROM_SERVER_SUCCESS:
      return Object.assign({}, state, {
        assignedEmployees: action.payload
            .map((assignedEmployee) => {
                return Object.assign({}, assignedEmployee, {
                    completed: assignedEmployee.reviewId !== null
                });
            })
      });

    default:
      return state;
  }
};
