import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from './choice.service';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import * as _ from 'underscore';
@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['../app.component.css']
})
export class ChoiceComponent implements OnInit {
  public search: string="";
  public filter: string="";
  public posts: any[];
  private rawPosts: any[];
  private pagesNumber:number;
  public pages = [];
  private postNames = [];
  public loaded: boolean=false;
  constructor(private http: HttpClient,private appService: AppService) {}
  ngOnInit(): void {
    this.http.get<any>('https://rocky-citadel-32862.herokuapp.com/Blog/posts').subscribe(data => {
      //console.log(data);
      this.posts = data;
      this.rawPosts = data.slice();
      console.log(this.posts.length);
      this.pagesNumber=Math.ceil(this.posts.length/8);
      console.log(this.pagesNumber);
      for(let i=1; i<this.pagesNumber+1; i++){
        this.pages.push(i);
      }
      this.posts=this.rawPosts.slice();
      for(let i=0; i<this.posts.length; i++){
        this.posts[i].id=i;
      }
      this.loaded=true;
      console.log(this.loaded);
    })
  }
  selectChange(): void {
    console.log('select change');
    if(this.filter===""){
      this.posts=this.rawPosts.slice();
      for(let i=0; i<this.posts.length; i++){
        this.posts[i].id=i;
      }
    }if(this.filter==="1"){
     var sortedObjs = _.sortBy( this.rawPosts, 'title' ); 
     console.log(sortedObjs);
     this.posts=sortedObjs;
     for(let i=0; i<this.posts.length; i++){
       this.posts[i].id=i;
     }
     }if(this.filter==="2"){
      var sortedObjs = _.sortBy( this.rawPosts, 'title' ); 
      sortedObjs.reverse();
      this.posts=sortedObjs;
      for(let i=0; i<this.posts.length; i++){
        this.posts[i].id=i;
      }
    }if(this.filter==="3"){
      var sortedObjs = _.sortBy( this.rawPosts, 'date' ); 
      this.posts=sortedObjs;
      for(let i=0; i<this.posts.length; i++){
        this.posts[i].id=i;
      }
      console.log(this.posts);
    }if(this.filter==="4"){
      var sortedObjs = _.sortBy( this.rawPosts, 'date' ); 
      sortedObjs.reverse();
      this.posts=sortedObjs;
      for(let i=0; i<this.posts.length; i++){
        this.posts[i].id=i;
      }
      console.log(this.posts);
    }
  }
}
