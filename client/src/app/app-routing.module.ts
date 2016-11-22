import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }    from './components/dashboard/dashboard.component';
import { ReviewComponent }       from './components/review/review.component';
import { LoginSectionComponent } from './sections/login/login-section.component';

const AppRoutes: Routes = [
  { path: 'login',  component: LoginSectionComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'review',  component: ReviewComponent },
  { path: 'review/:id',  component: ReviewComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }