import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';
  loginValue;
  parentMethod($event){
    this.loginValue= $event;
    console.log("login value equals" + this.loginValue);
  }
  
  
}
