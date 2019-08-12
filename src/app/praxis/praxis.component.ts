import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DesignUtilitiesService } from '../appServices/design-utilities.service';

@Component({
  selector: 'app-praxis',
  templateUrl: './praxis.component.html',
  styleUrls: ['./praxis.component.css']
})
export class PraxisComponent implements OnInit {
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
