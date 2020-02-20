import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CrossfitNV';

  constructor() {
    // crude captcha ...
    sessionStorage.setItem("captcha", new Date().toDateString());
  }
}
