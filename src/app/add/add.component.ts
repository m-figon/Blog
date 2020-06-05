import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public title="";
  public img="";
  public content="";
  constructor() { }

  ngOnInit(): void {
  }
  addPost(){
    console.log('adding posts');
  }
}
