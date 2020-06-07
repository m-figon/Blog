import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  account="";
  password="";
  loginId="visible";
  ngOnInit(): void {
  }
  loginSend(){
    console.log('you loged!');
    console.log(this.account);
    console.log(this.password);
    this.loginId="hidden";
  }
}
