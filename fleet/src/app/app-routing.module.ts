import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFleetsComponent } from './my-fleets/my-fleets.component';

const routes: Routes = [
  { path: '', redirectTo: '/my-fleets', pathMatch: 'full' },
  { path: 'my-fleets', component: MyFleetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
