import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id;
  post;
  logedUser;
  newComment="Enter new comment value...";
  constructor(private route: ActivatedRoute,private appService: AppService, private http: HttpClient) { }
  ngOnInit(): void {
     this.id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.post = history.state;
      this.logedUser = this.appService.getAccount();
      setInterval(()=>{
        this.logedUser = this.appService.getAccount();
        console.log(this.logedUser);
      },500)
  }
  changeArea(oldValue, newValue){
    if(this.newComment===oldValue){
      this.newComment=newValue;
    }
  }

  addComment(){
    this.post[this.id].comments.push({
      author: this.logedUser,
      content: this.newComment,
      id: this.post[this.id].comments.length
    })
    let tmpArray= this.post[this.id].comments.slice();
    this.http.put<any>("https://rocky-citadel-32862.herokuapp.com/Blog/posts/"+this.id, {
      title: this.post[this.id].title,
      img: this.post[this.id].img,
      content: this.post[this.id].content,
      author: this.post[this.id].logedUser,
      comments: tmpArray,
      date: this.post[this.id].date
      }).toPromise().then(data => {
      console.log(data);
      this.newComment="";
})
  }
}
