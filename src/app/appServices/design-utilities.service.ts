import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilitiesService {

  constructor() { }

  selectedLang = new BehaviorSubject('');
}
