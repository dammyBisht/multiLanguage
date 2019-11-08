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
    loadChildren: './home/home.module#HomeModule',
    data: {
      title: 'Title of website',
      description: 'Description on page',
    }
  },
  {
    path: "home",
    loadChildren: './home/home.module#HomeModule',
    data: {
      title: 'Title of website',
      description: 'Description on page',
    }
  },
  {
    path: "service",
    loadChildren: "./service/service.module#ServiceModule",
    data: {
      title: 'Title of website',
      description: 'Description on page',
    }
  },
  {
    path: "praxis",
    loadChildren: './praxis/praxis.module#PraxisModule',
    data: {
      title: 'Title of website',
      description: 'Description on page',
    }
  },
  {
    path: "multilanguage",
    loadChildren: './multilanguage/multilanguage.module#MultilanguageModule',
    data: {
      title: 'Title of website',
      description: 'Description on page',
    }
  },
  {
    path: "404",
    component: NotFoundComponent,
    data: {
      title: 'Title of website',
      description: 'Description on page',
    }
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
