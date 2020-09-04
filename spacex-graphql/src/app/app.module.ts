import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchesListComponent } from './launches-list/launches-list.component';
import { ViewSelectorComponent } from './view-selector/view-selector.component';
import { ShipsListComponent } from './ships-list/ships-list.component';
import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LaunchesListComponent,
    ViewSelectorComponent,
    ShipsListComponent,
    ShipDetailsComponent,
    LaunchDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
