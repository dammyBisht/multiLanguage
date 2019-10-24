import { Component, OnInit } from '@angular/core';
import { DesignUtilitiesService } from '../appServices/design-utilities.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  browserLang;
  constructor(public translate: TranslateService, private _designUtilitiesService: DesignUtilitiesService) {
    this._designUtilitiesService.selectedLang.subscribe(res => {
      translate.setDefaultLang(res);
    })
    translate.addLangs(['en', 'fr', 'de']);
  }
  ngOnInit() {
  }


}
