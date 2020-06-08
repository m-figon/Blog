import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }
  account = "";
  password = "";
  users;
  correctFlag = false;
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
  }
  loginSend() {
    for (let user of this.users) {
      if (this.account === user.account && this.password === user.password) {
        console.log('you loged!');
        this.correctFlag = true;
        this.accountEmiter.emit(this.account);
      }
    }
    if (!this.correctFlag) {
      alert('wrong data');
      this.account = "";
      this.password = "";
    }
  }
}
