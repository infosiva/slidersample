import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentlimit;
  constructor() {
    this.currentlimit = 50;
  }
  increaselimit() {
    debugger;
    const temp = +this.currentlimit;
    this.currentlimit = temp + 10;
  }
}
