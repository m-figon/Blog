import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AppService{
    blog = [];
    account="";
    loginState;
    registerState;
    constructor(private http: HttpClient) {}
    getPosts(){
        this.http.get<any>('https://rocky-citadel-32862.herokuapp.com/Blog').subscribe(data => {
            this.blog=data.slice();
            console.log(this.blog);
            return(this.blog);
    })
    }
    setAccount(value){
        this.account=value;
    }
    setLoginOrRegister(type,value){
        if(type==="login"){
            this.loginState=value;
        }else if(type==="register"){
            this.registerState=value;
        }
    }
    getLoginOrRegister(type){
        if(type==="login"){
            return this.loginState;
        }else if(type==="register"){
            return this.registerState;
        }
    }
    getAccount(){
        return(this.account);
    }
}