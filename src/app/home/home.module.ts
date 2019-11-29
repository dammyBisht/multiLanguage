import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { HomeComponent } from './home.component';
import { DesignUtilitiesModule } from '../appModules/design-utilities.module';


// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  // return new TranslateHttpLoader(httpClient, './assets/i18n/app/', '.json');
  return new MultiTranslateHttpLoader(httpClient, [
    { prefix: "./assets/i18n/home/", suffix: ".json" }
  ]);
}


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
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
export class HomeModule { }
