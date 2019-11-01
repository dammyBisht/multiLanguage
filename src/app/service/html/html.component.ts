import { Component, OnInit } from '@angular/core';
import { DesignUtilitiesService } from 'src/app/appServices/design-utilities.service';
import { TranslateService } from '@ngx-translate/core';
import { config } from 'src/app/config';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {
  browserLang;
  constructor(public translate: TranslateService, private _designUtilitiesService: DesignUtilitiesService) {
    this._designUtilitiesService.selectedLang.subscribe(res => {
      translate.setDefaultLang(res);
    })
    translate.addLangs(['en', 'fr', 'de']);
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    config.scanFunc('.component');
  }

}
