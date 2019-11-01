import { Component, OnInit } from '@angular/core';
import { DesignUtilitiesService } from '../appServices/design-utilities.service';
import { TranslateService } from '@ngx-translate/core';
import { config } from '../config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  browserLang;
  param = { value: 'dummy' };
  constructor(public translate: TranslateService, private _designUtilitiesService: DesignUtilitiesService) {
    this._designUtilitiesService.selectedLang.subscribe(res => {
      translate.setDefaultLang(res);
    })
    translate.addLangs(['en', 'fr', 'de']);
    //   translate.get('HOME.BANNER.H1', {value: 'world'}).subscribe((res: string) => {
    //     console.log(res);
    //     //=> 'hello world'
    // });
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    config.scanFunc('.component');
  }

}
