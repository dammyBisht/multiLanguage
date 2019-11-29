import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DesignUtilitiesModule } from '../appModules/design-utilities.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { HtmlComponent } from './html/html.component';
import { PhpComponent } from './php/php.component';
import { ServiceComponent } from './service.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new MultiTranslateHttpLoader(httpClient, [
    { prefix: "./assets/i18n/service/", suffix: ".json" },
    { prefix: "./assets/i18n/service/html/", suffix: ".json" },
    { prefix: "./assets/i18n/service/php/", suffix: ".json" },
  ]);
}

const routes: Routes = [
  {
    path: '',
    component: ServiceComponent,
    children: [
      {
        path: '',
        component: HtmlComponent,
        data: {
          title: 'Title of website HTML',
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
    DesignUtilitiesModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    TranslateModule
  ],
  providers: [
    TranslateModule
  ]
})
export class ServiceModule { }
