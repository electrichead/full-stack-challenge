import { Injectable } from '@angular/core';
import IAppState from '../../iAppState';
import IUserInfo from '../../../interfaces/iUserInfo';
import { Store } from '@ngrx/store';
import ACTIONS from '../actions.constant';

@Injectable()
export class LoginActionsService {

  constructor(private store: Store<IAppState>) { }

  login(userData: IUserInfo) {
    this.store.dispatch({
      type: ACTIONS.LOGIN,
      payload: userData
    });
  }
}
