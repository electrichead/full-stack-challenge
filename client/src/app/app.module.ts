import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './state/reducers/app.reducer';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { LoginActionsService } from './state/actions/login/login-actions.service';
import { LoginSectionComponent } from './sections/login/login-section.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardActionsService } from './state/actions/dashboard/dashboard-actions.service';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './components/dashboard/employee-dashboard/employee-dashboard.component';


import { EffectsModule } from '@ngrx/effects';
import { EmployeeDashboardEffectsService } from './state/effects/employee-dashboard/employee-dashboard-effects.service';
import { ReviewSectionComponent } from './sections/review/review-section/review-section.component';
import { ReviewComponent } from './components/review/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    DashboardComponent,
    EmployeeDashboardComponent,
    LoginComponent,
    LoginSectionComponent,
    ReviewSectionComponent,
    ReviewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EffectsModule.run(EmployeeDashboardEffectsService),
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ app: appReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    DashboardActionsService,
    LoginActionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
