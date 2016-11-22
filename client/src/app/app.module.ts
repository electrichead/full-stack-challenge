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
import { LoginSectionComponent } from './sections/login-section/login-section.component';

import { DashboardActionsService } from './state/actions/dashboard/dashboard-actions.service';
import { DashboardSectionComponent } from './sections/dashboard-section/dashboard-section.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './components/dashboard/employee-dashboard/employee-dashboard.component';


import { EffectsModule } from '@ngrx/effects';
import { EmployeeDashboardEffectsService } from './state/effects/employee-dashboard/employee-dashboard-effects.service';
import { ReviewEffectsService } from './state/effects/review/review-effects.service';

import { ReviewActionsService } from './state/actions/review/review-actions.service';
import { ReviewSectionComponent } from './sections/review-section/review-section.component';
import { ReviewComponent } from './components/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    DashboardSectionComponent,
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
    EffectsModule.runAfterBootstrap(ReviewEffectsService),
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ app: appReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    DashboardActionsService,
    LoginActionsService,
    ReviewActionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
