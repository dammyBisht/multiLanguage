import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { config } from './config';
declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        config.scanFunc();
      }
    });
  }

}
