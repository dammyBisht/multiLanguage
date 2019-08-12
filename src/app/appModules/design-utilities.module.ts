import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  // return new TranslateHttpLoader(httpClient, './assets/i18n/app/', '.json');
  return new MultiTranslateHttpLoader(httpClient, [
    { prefix: "./assets/i18n/include/header/", suffix: ".json" },
    { prefix: "./assets/i18n/home/", suffix: ".json" },
    { prefix: "./assets/i18n/praxis/", suffix: ".json" },
    { prefix: "./assets/i18n/service/", suffix: ".json" },
    { prefix: "./assets/i18n/service/html/", suffix: ".json" },
    { prefix: "./assets/i18n/service/php/", suffix: ".json" },
  ]);
}

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
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
    HttpClientModule,
    TranslateModule
  ],
  providers: [
    TranslateModule
  ]
})
export class DesignUtilitiesModule { }
