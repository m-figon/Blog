import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';
  logedUser;
  loginValue;
  registerValue;
  parentMethod($event) {
    this.loginValue = $event;
    console.log("login value equals " + this.loginValue);
  }
  parentMethod2($event) {
    this.logedUser = $event;
    console.log("loged user is " + this.logedUser);
  }
  parentMethod3($event) {
    this.registerValue = $event;
    console.log("register value equals " + this.registerValue);
  }


}
