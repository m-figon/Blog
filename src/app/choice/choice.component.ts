import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from './choice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
  search="";
  posts;
  pagesNumber;
  pages = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<any>('https://rocky-citadel-32862.herokuapp.com/Blog').subscribe(data => {
      //console.log(data);
      this.posts = data;
      console.log(this.posts.length);
      this.pagesNumber=Math.ceil(this.posts.length/8);
      console.log(this.pagesNumber);
      for(let i=1; i<this.pagesNumber+1; i++){
        this.pages.push(i);
      }
    })
  }
}
