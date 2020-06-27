
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';
  public logedUser;
  public loginValue;
  public registerValue;
  parentMethod($event): void {
    this.loginValue = $event;
    console.log("login value equals " + this.loginValue);
  }
  parentMethod2($event): void  {
    this.logedUser = $event;
    console.log("loged user is " + this.logedUser);
  }
  parentMethod3($event): void  {
    this.registerValue = $event;
    console.log("register value equals " + this.registerValue);
  }


}
