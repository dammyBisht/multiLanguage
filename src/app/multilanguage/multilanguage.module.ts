import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MultilanguageComponent } from './multilanguage.component';
import { DesignUtilitiesModule } from '../appModules/design-utilities.module';

const routes: Routes = [
  {
    path: '',
    component: MultilanguageComponent
  }
];
@NgModule({
  declarations: [MultilanguageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DesignUtilitiesModule
  ],
  exports: [RouterModule]
})
export class MultilanguageModule { }
