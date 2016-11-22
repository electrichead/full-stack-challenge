import { Component, Output, EventEmitter } from '@angular/core';
import { LoginDetailsViewModel } from './login.viewmodel';
import {Http} from '@angular/http';
import IUserInfo from '../../interfaces/iUserInfo';
import 'rxjs/add/operator/map';

@Component({
  moduleId: 'LoginComponent',
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  @Output() loginOccurred = new EventEmitter();

  vm = new LoginDetailsViewModel('', '');
  submitting = false;

  constructor(
    private http: Http
  ) {}

  onSubmit() {
    if (!this.submitting) {
      this.submitting = true;

      this.http.post(
        'http://localhost:9090/api/v1/login',
        this.vm
      )
      .map(res => res.json())
      .subscribe({
        next: (result: IUserInfo) => {
          this.vm.password = '';
          this.loginOccurred.emit(result);
          this.submitting = false;
        },
        error: err => {
          console.error('error from API', err);
          this.submitting = false;
        }
      });
    }
  }
}
