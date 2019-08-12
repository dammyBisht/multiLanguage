import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PraxisComponent } from './praxis.component';
import { DesignUtilitiesModule } from '../appModules/design-utilities.module';



const routes: Routes = [
  {
    path: '',
    component: PraxisComponent
  }
];

@NgModule({
  declarations: [
    PraxisComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DesignUtilitiesModule
  ],
  exports: [RouterModule]
})
export class PraxisModule { }
