import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewSelectorComponent } from './view-selector/view-selector.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { PastLaunchListComponent } from './past-launch-list/past-launch-list.component';
import { FutureLaunchListComponent } from './future-launch-list/future-launch-list.component';
import { GraphQLModule } from './graphql.module';
import { RelativeTimePipe } from './pipes/relative-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ViewSelectorComponent,
    LaunchDetailsComponent,
    PastLaunchListComponent,
    FutureLaunchListComponent,
    RelativeTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
