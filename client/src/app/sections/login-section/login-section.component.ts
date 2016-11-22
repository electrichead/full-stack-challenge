import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginActionsService } from '../../state/actions/login/login-actions.service';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.css']
})
export class LoginSectionComponent implements OnInit {

  constructor(
    private router: Router,
    private loginActions: LoginActionsService
  ) { }

  ngOnInit() {
  }

  handleLoginOccurred(result) {
    this.loginActions.login(result);
    this.router.navigate(['/dashboard']);
  }
}
