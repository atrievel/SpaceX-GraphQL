import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewSelectorComponent } from './view-selector/view-selector.component';
import { LaunchesListComponent } from './launches-list/launches-list.component';
import { ShipsListComponent } from './ships-list/ships-list.component';


const routes: Routes = [
  {
    path: '',
    component: ViewSelectorComponent
  },
  {
    path: 'launches',
    component: LaunchesListComponent
  },
  {
    path: 'ships',
    component: ShipsListComponent
  },
  {
    path: 'ships/:id',
    component: ShipsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
