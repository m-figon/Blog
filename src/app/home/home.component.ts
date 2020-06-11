import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loginState;
  public registerState;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    setInterval(()=>{
      this.loginState = this.appService.getLoginOrRegister("login");
      this.registerState = this.appService.getLoginOrRegister("register");
    },500)
  }

}
