import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-sub-header',
  templateUrl: './article-sub-header.component.html',
  styleUrls: ['./article-sub-header.component.scss']
})
export class ArticleSubHeaderComponent implements OnInit {
  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
