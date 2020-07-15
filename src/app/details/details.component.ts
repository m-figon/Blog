import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['../app.component.css']
})
export class DetailsComponent implements OnInit {
  public id: number;
  public post;
  public logedUser: string;
  newComment="Enter new comment value...";
  constructor(private route: ActivatedRoute,private router: Router, private appService: AppService, private http: HttpClient) { }
  ngOnInit(): void {
     this.id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.post = history.state;
      if(!this.post[this.id]){
        this.router.navigate(['/choice']);
      }
      this.logedUser = this.appService.getAccount();
      setInterval(()=>{
        this.logedUser = this.appService.getAccount();
        console.log(this.logedUser);
      },500)
  }
  changeArea(oldValue: string, newValue: string): void {
    if(this.newComment===oldValue){
      this.newComment=newValue;
    }
  }

  addComment(): void {
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
