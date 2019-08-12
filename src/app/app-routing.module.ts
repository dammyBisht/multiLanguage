import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
    path:"service",
    loadChildren:"./service/service.module#ServiceModule"
  },
  {
    path: "praxis",
    loadChildren: './praxis/praxis.module#PraxisModule'
  },
  
  {//Page not found
    path: "**",
    redirectTo: '/index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
