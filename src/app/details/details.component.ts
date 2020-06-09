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
  newComment="";
  constructor(private route: ActivatedRoute,private appService: AppService, private http: HttpClient) { }
  ngOnInit(): void {
     this.id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.post = history.state;
      this.logedUser = this.appService.getAccount();
  }

}
