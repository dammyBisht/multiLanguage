import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DesignUtilitiesService } from 'src/app/appServices/design-utilities.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
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
