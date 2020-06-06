import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['../choice.component.css']
})
export class PostComponent implements OnInit {
  @Input() public parentPosts;
  @Input() public parentSearch;
  constructor() { }

  ngOnInit(): void {
  }

}
