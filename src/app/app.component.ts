import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  param = {value: 'world'};
  title = 'ngxtranslate';
  mousecount = 1;

  constructor (public translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  addMouse = () => this.mousecount++;
  removeMouse = () => {
    if (this.mousecount > 0)  { this.mousecount--; }
  }
  mousePlurality() {
    switch (this.mousecount) {
      case 0: {return 'mousealert.none'; }
      case 1: {return 'mousealert.one'; }
      default: {return 'mousealert.two'; }

    }
  }

  useLanguage = (language: string) => {
    this.translate.use(language);
  }
}

