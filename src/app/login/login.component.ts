import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private appService: AppService) { }
  public account: string = "";
  public password: string = "";
  private users;
  private correctFlag: boolean = false;
  public wrongUser: boolean = false;
  @Output() loginEmiter = new EventEmitter();
  @Output() accountEmiter = new EventEmitter();

  ngOnInit(): void {
    this.http.get<any>('https://rocky-citadel-32862.herokuapp.com/Blog/users').subscribe(data => {
      //console.log(data);
      this.users = data;
      console.log(this.users);
    })
  }
  closeLogin() {
    this.loginEmiter.emit(false);
    this.appService.setLoginOrRegister("login",false);
  }
  loginSend() {
    for (let user of this.users) {
      if (this.account === user.account && this.password === user.password) {
        console.log('you loged!');
        this.correctFlag = true;
        this.accountEmiter.emit(this.account);
        this.appService.setAccount(this.account);
        this.loginEmiter.emit(false);
        this.appService.setLoginOrRegister("login",false);
      }
    }
    if (!this.correctFlag) {
      this.account = "";
      this.password = "";
      this.wrongUser=true;
    }
  }
}
