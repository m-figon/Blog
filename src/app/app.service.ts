import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AppService{
    blog = [];
    account="";
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
    getAccount(){
        return(this.account);
    }
}