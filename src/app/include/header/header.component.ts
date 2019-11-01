import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DesignUtilitiesService } from 'src/app/appServices/design-utilities.service';
import { config } from '../../config';

declare var jQuery: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  browserLang: any;
  constructor(public translate: TranslateService, private _designUtilitiesService: DesignUtilitiesService) {
    this._designUtilitiesService.selectedLang.subscribe(res => {
      this.browserLang = res;
      this.languageChanged()
    })
    translate.addLangs(['en', 'fr', 'de']);
    translate.setDefaultLang('fr');
    translate.use('fr');

    this.browserLang = translate.getDefaultLang();
    //console.log(this.browserLang)
    this.languageChanged()
    this._designUtilitiesService.selectedLang.next(this.browserLang)
  }
  languageChanged() {
    this.translate.use(this.browserLang.match(/en|fr|de/) ? this.browserLang : 'en');
  }
  selectedLanguage($event) {
    //console.log($event);
    this._designUtilitiesService.selectedLang.next($event);
    config.scanFunc('.component');
  }
  ngOnInit() {
  }

}
