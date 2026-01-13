import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  clicks = 0;

  countClicks() {
    this.clicks++;
  }
}
