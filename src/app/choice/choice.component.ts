import { Component, OnInit } from '@angular/core';
import { PostsService } from './choice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
  posts;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<any>('https://my-json-server.typicode.com/m-figon/demo/users').subscribe(data => {
      //console.log(data);
      this.posts = data;
    })
  }
}
