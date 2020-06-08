import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  account="";
  password="";
  password2="";
  email="";
  constructor(private http: HttpClient) {}
  @Output() registerEmiter = new EventEmitter();

  ngOnInit(): void {
  }
  closeRegister() {
    this.registerEmiter.emit(false);
  }
  
  registerUser(){
    if(this.account && this.password && this.password2 && this.email){
      this.http.post<any>("https://rocky-citadel-32862.herokuapp.com/Blog/users", {
        email: this.email,
        account: this.account,
        password: this.password,
      }).toPromise().then(data=>{
        console.log(data);
      })
    }
    
  }
}
