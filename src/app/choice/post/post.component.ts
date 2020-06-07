import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['../choice.component.css']
})
export class PostComponent implements OnInit {
  @Input() public parentPosts;
  @Input() public parentCurrentPosts;
  @Input() public parentSearch;
  @Input() public parentPages;
  @Input() public parentFilter;

  constructor() { }
  currentPage=1;
  minVal=-1;
  maxVal=8;
  ngOnInit(): void {
  }
  changePage(num){
    this.currentPage=num;
    this.maxVal=8*this.currentPage;
    this.minVal=this.maxVal-9;
  }
  checkingPage(num){
    if(this.currentPage===num){
      return true;
    }
    else{
      return false;
    }
  }

}
