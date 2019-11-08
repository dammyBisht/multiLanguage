import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { config } from './config';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SeoService } from './appServices/seo.service';
declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private _seoService: SeoService) {
    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        //config.scanFunc('.component');
      }
    });
  }
  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    )
      .subscribe((event) => {
        this._seoService.updateTitle(event['title']);
        this._seoService.updateDescription(event['description']);
      })
  }

}
