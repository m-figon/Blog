import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['../../app.component.css']
})
export class PostComponent implements OnInit {
  @Input() public parentPosts;
  @Input() public parentCurrentPosts;
  @Input() public parentSearch;
  @Input() public parentPages;
  @Input() public parentFilter;

  constructor() { }
  private currentPage: number=1;
  public minVal: number=-1;
  public maxVal: number=8;
  ngOnInit(): void {
  }
  changePage(num: number): void {
    this.currentPage=num;
    this.maxVal=8*this.currentPage;
    this.minVal=this.maxVal-9;
  }
  checkingPage(num: number): boolean {
    if(this.currentPage===num){
      return true;
    }
    else{
      return false;
    }
  }

}
