import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']
})
export class RegisterComponent implements OnInit {
  public account: string = "";
  public password: string = "";
  public password2: string = "";
  public email: string = "";
  public accountId: string;
  public emailId: string;
  public passwordId: string;
  public password2Id: string;
  public accountTooltip: string = "hidden";
  public emailTooltip: string = "hidden";
  public passwordTootlip: string = "hidden";
  public password2Tooltip: string = "hidden";
  constructor(private http: HttpClient, private appService: AppService) { }
  @Output() registerEmiter = new EventEmitter();

  ngOnInit(): void {
  }
  closeRegister(): void {
    this.registerEmiter.emit(false);
    this.appService.setLoginOrRegister("register", false);
  }
  focusHandler(value: string): void {
    eval("this." + value + "='visible'");
  }
  blurHandler(value: string): void {
    eval("this." + value + "='hidden'");
  }
  registerUser(): void {
    let correctFlag = true;
    if (!(this.email.match(/^[a-z0-9\._\-]+@[a-z0-9\.\-]+\.[a-z]{2,4}$/) === null)) {
      console.log('email correct');
      this.emailTooltip = "hidden";
      this.emailId = "correct";
    } else {
      this.emailId = "incorrect";
      console.log('email incorrect');
      this.emailTooltip = "visible";
      correctFlag = false;
    }
    if (!(this.account.match(/^[a-zA-Z0-9\.\-_]{4,10}$/) === null)) {
      this.accountId = "correct";
      console.log('account correct');
      this.accountTooltip = "hidden";
    } else {
      this.accountId = "incorrect";
      console.log('account incorrect');
      this.accountTooltip = "visible";
      correctFlag = false;
    }
    if (!(this.password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\.\-_@$!%*#?&])[A-Za-z\d\.\-_@$!%*#?&]{8,13}$/) === null)) {
      console.log('password correct');
      this.passwordId = "correct";
      this.passwordTootlip = "hidden";
    } else {
      this.passwordId = "incorrect";
      console.log('password incorrect');
      this.passwordTootlip = "visible";
      correctFlag = false;
    }
    if ((this.password === this.password2 && this.password !== "")) {
      console.log('password2 correct');
      this.password2Id = "correct";
      this.password2Tooltip = "hidden";
    } else {
      this.password2Id = "incorrect";
      console.log('password2 incorrect');
      this.password2Tooltip = "visible";
      correctFlag = false;
    }
    if (correctFlag) {
      this.http.post<any>("https://rocky-citadel-32862.herokuapp.com/Blog/users", {
        email: this.email,
        account: this.account,
        password: this.password,
      }).toPromise().then(data => {
        console.log(data);
        alert('new user created');
      })
    }
  }
}
