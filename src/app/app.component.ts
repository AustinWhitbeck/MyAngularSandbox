import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'personal-sandbox-angular';
  loggedIn: boolean = true;
  counterShow: boolean = true;
  colorclickerShow: boolean = true;


  toggleShowCounter() {
    this.counterShow = !this.counterShow;
    console.log("toggle show counter log", this.counterShow);
  }

  toggleShowColor() {
    this.colorclickerShow = !this.colorclickerShow;
    console.log("toggle show color clicker log", this.colorclickerShow);
  }
}
