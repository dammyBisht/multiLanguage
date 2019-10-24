import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: "index",
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: "home",
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: "service",
    loadChildren: "./service/service.module#ServiceModule"
  },
  {
    path: "praxis",
    loadChildren: './praxis/praxis.module#PraxisModule'
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {//Page not found
    path: "**",
    redirectTo: '/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
