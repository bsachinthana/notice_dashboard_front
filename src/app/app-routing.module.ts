import { ControlComponent } from './control/control.component';
import { ViewComponent } from './view/view.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'view', component: ViewComponent },
  { path: 'control', component: ControlComponent },
  { path: '*', component: ViewComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
