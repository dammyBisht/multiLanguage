import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoNextDirective } from '../appDirectives/go-next.directive';




@NgModule({
  declarations: [
    GoNextDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GoNextDirective
  ]
})
export class DesignUtilitiesModule { }
