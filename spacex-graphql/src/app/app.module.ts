import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewSelectorComponent } from './view-selector/view-selector.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { HttpClientModule } from '@angular/common/http';
import { PastLaunchListComponent } from './past-launch-list/past-launch-list.component';
import { FutureLaunchListComponent } from './future-launch-list/future-launch-list.component';
import { GraphQLModule } from './graphql.module';
import { RelativeTimePipe } from './pipes/relative-time.pipe';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewSelectorComponent,
    LaunchDetailsComponent,
    PastLaunchListComponent,
    FutureLaunchListComponent,
    RelativeTimePipe,
    TopNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    GraphQLModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
