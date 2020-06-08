import { Component, OnInit, Output , EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
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
    this.loginEmiter.emit(this.loginState);
  }
  registerClick(){
    console.log('register click');
    this.registerState = !this.registerState;
    this.registerEmiter.emit(this.registerState);
  }
  logoutClick(){
    console.log('logout click');
    this.accountEmiter.emit("");
  }
}
