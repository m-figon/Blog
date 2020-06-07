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
  @Output() emiter = new EventEmitter();
  loginClick(){
    console.log('login click');
    this.loginState = !this.loginState;
    this.emiter.emit(this.loginState);
  }
}
