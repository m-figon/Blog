import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.http.post<any>("https://rocky-citadel-32862.herokuapp.com/Blog", {
        title: this.title,
        img: this.img,
        content: this.content
      }).toPromise().then(data=>{
        console.log(data);
      })
  }
}
