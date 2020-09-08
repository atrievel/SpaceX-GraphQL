import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewSelectorComponent } from './view-selector/view-selector.component';
import { PastLaunchListComponent } from './past-launch-list/past-launch-list.component';
import { FutureLaunchListComponent } from './future-launch-list/future-launch-list.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';


const routes: Routes = [
  {
    path: '',
    component: ViewSelectorComponent
  },
  {
    path: 'launches/past',
    component: PastLaunchListComponent
  },
  {
    path: 'launches/future',
    component: FutureLaunchListComponent
  },
  {
    path: 'launches/:id',
    component: LaunchDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
