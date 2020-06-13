import { Component, OnInit, Output , EventEmitter, Input} from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private appService: AppService) { }
  ngOnInit(): void {
    setInterval(()=>{
      this.loginState = this.appService.getLoginOrRegister("login");
      this.registerState = this.appService.getLoginOrRegister("register");
    },500)
  }
  public loginState=false;
  public registerState=false;
  @Input() public parentLoged;
  @Output() loginEmiter = new EventEmitter();
  @Output() registerEmiter = new EventEmitter();
  @Output() accountEmiter = new EventEmitter();
  loginClick(){
    console.log('login click');
    this.loginState = !this.loginState;
    this.appService.setLoginOrRegister("login",true);
    this.loginEmiter.emit(this.loginState);
  }
  registerClick(){
    console.log('register click');
    this.registerState = !this.registerState;
    this.appService.setLoginOrRegister("register",true);
    this.registerEmiter.emit(this.registerState);
  }
  logoutClick(){
    console.log('logout click');
    this.appService.setLoginOrRegister("login",false);
    this.accountEmiter.emit("");
  }
}
