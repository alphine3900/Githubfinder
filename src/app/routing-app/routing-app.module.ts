import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutingAppRoutingModule } from './routing-app-routing.module';
import { FormComponent } from '../form/form.component';
const routes: Routes= [
  {
  path: 'home', component:HomeComponent
  },
  {
    path: 'form', component:FormComponent
  },
  { path:' ',redirectTo:'/form',pathMatch:'full'},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingAppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class RoutingAppModule { }
