import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DesignUtilitiesService } from 'src/app/appServices/design-utilities.service';
import { config } from 'src/app/config';

@Component({
  selector: 'app-php',
  templateUrl: './php.component.html',
  styleUrls: ['./php.component.css']
})
export class PhpComponent implements OnInit {
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
