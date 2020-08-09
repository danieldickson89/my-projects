import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFleetsComponent } from './my-fleets/my-fleets.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'my-fleets', component: MyFleetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
