import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DesignUtilitiesModule } from '../appModules/design-utilities.module';
import { HtmlComponent } from './html/html.component';
import { PhpComponent } from './php/php.component';
import { ServiceComponent } from './service.component';



const routes: Routes = [
  {
    path: '',
    component: HtmlComponent,
    children: [
      {
        path: 'html',
        component: HtmlComponent
      },
      {
        path: 'php',
        component: PhpComponent
      },
    ]
  }
];

@NgModule({
  declarations: [

    HtmlComponent,
    PhpComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DesignUtilitiesModule
  ],
  exports: [RouterModule]
})
export class ServiceModule { }
