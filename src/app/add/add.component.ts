import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public title="";
  public img="";
  public content="";
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }
  addPost(){
    console.log('adding posts');
    let tmp;
    let newCurrentDate="";
    let currentDate=moment().format('L');
    console.log(currentDate);
    tmp=currentDate.substr(6,4);
    console.log(tmp);
    newCurrentDate+=tmp;
    console.log(newCurrentDate);
    tmp="/";
    tmp+=currentDate.substr(0,2);
    newCurrentDate+=tmp;
    console.log(newCurrentDate);
    tmp="/";
    tmp+=currentDate.substr(3,2);
    newCurrentDate+=tmp;
    console.log(newCurrentDate);
    this.http.post<any>("https://rocky-citadel-32862.herokuapp.com/Blog", {
        title: this.title,
        img: this.img,
        content: this.content,
        date: newCurrentDate
      }).toPromise().then(data=>{
        console.log(data);
      })
  }
}
