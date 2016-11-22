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
    assignedEmployees: [],
    currentReview: {
      isCreating: true,
      employeeId: 0,
      reviewContent: '',
      reviewId: null
    }
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

    case ACTIONS.REMOTE_EMPLOYEE_PERIOD_CHANGE_SUCCESS:
      return Object.assign({}, state, {
        assignedEmployees: action.payload
            .map((assignedEmployee) => {
                return Object.assign({}, assignedEmployee, {
                    completed: assignedEmployee.reviewId !== null
                });
            })
      });

    case ACTIONS.REVIEW_CLICKED_CREATE:
      return Object.assign({}, state, {
        currentReview: {
          isCreating: true,
          employeeId: action.payload.employeeId,
          reviewContent: '',
          reviewId: null
        }
      });

    case ACTIONS.REMOTE_REVIEW_CONTENT_SUCCESS:
      return Object.assign({}, state, {
        currentReview: {
          isCreating: false,
          employeeId: action.payload.employeeId,
          reviewContent: action.payload.reviewContent,
          reviewId: action.payload.id
        }
      });

    default:
      return state;
  }
};
