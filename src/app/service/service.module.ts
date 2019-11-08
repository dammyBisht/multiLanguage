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
        component: HtmlComponent,
        data: {
          title: 'Title of website',
          description: 'Description on page HTML',
        }
      },
      {
        path: 'php',
        component: PhpComponent,
        data: {
          title: 'Title of website',
          description: 'Description on page PHP',
        }
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
