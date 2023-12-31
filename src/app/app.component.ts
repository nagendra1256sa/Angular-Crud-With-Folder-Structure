import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testing';
  constructor(public translate:TranslateService)
  {
    this.translate.addLangs(['en','te'])
    this.translate.setDefaultLang('en');
    this.translate.use('en')
  }
}
