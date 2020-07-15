import { Component, OnInit, Output , EventEmitter, Input} from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['../app.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private appService: AppService) { }
  ngOnInit(): void {
  }
  private loginState: boolean=false;
  private registerState: boolean=false;
  @Input() public parentLoged;
  @Output() loginEmiter = new EventEmitter();
  @Output() registerEmiter = new EventEmitter();
  @Output() accountEmiter = new EventEmitter();
  loginClick(): void {
    console.log('login click');
    this.loginState = !this.loginState;
    this.appService.setLoginOrRegister("login",true);
    this.loginEmiter.emit(this.loginState);
  }
  registerClick(): void {
    console.log('register click');
    this.registerState = !this.registerState;
    this.appService.setLoginOrRegister("register",true);
    this.registerEmiter.emit(this.registerState);
  }
  logoutClick(): void {
    console.log('logout click');
    this.appService.setLoginOrRegister("login",false);
    this.appService.setAccount("");
    this.accountEmiter.emit("");
  }
}
