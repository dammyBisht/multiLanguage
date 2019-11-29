import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignUtilitiesModule } from './appModules/design-utilities.module';
import { HeaderComponent } from './include/header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LanguageChangeModule } from './appModules/language-change.module';



//localStorage.setItem("ok","./assets/i18n/app/");
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesignUtilitiesModule,
    LanguageChangeModule
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
