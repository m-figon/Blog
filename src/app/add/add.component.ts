import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['../app.component.css']
})
export class AddComponent implements OnInit {
  public title: string = "";
  public img: string = "";
  public content: string = "";
  public logedUser: string;
  constructor(private http: HttpClient, private appService: AppService) { }

  ngOnInit(): void {
    this.logedUser = this.appService.getAccount();
  }
  addPost(): void {
    function convertDate(tmp, currentDate, newCurrentDate) {
      tmp = currentDate.substr(6, 4);
      newCurrentDate += tmp;
      tmp = "/";
      tmp += currentDate.substr(0, 2);
      newCurrentDate += tmp;
      tmp = "/";
      tmp += currentDate.substr(3, 2);
      newCurrentDate += tmp;
      return newCurrentDate;
    }
    if (this.title && this.img && this.content && this.logedUser) {
      console.log('adding posts');
      let tmp;
      let newCurrentDate = "";
      let currentDate = moment().format('L');
      newCurrentDate = convertDate(tmp, currentDate, newCurrentDate);
      this.http.post<any>("https://rocky-citadel-32862.herokuapp.com/Blog/posts", {
        title: this.title,
        img: this.img,
        content: this.content,
        author: this.logedUser,
        date: newCurrentDate
      }).toPromise().then(data => {
        console.log(data);
        alert("Post added");
        this.title = "";
        this.img = "";
        this.content = "";
      })
    } else {
      alert('Invalid data');
    }
  }
}
