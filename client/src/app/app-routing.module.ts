import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardSectionComponent }    from './sections/dashboard-section/dashboard-section.component';
import { ReviewSectionComponent }       from './sections/review-section/review-section.component';
import { LoginSectionComponent } from './sections/login-section/login-section.component';

const AppRoutes: Routes = [
  { path: 'login',  component: LoginSectionComponent },
  { path: 'dashboard',  component: DashboardSectionComponent },
  { path: 'review',  component: ReviewSectionComponent },
  { path: 'review/:id',  component: ReviewSectionComponent },
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

export class AppRoutingModule { };
