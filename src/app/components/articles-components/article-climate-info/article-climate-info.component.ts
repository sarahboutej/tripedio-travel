import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'article-climate-info',
  templateUrl: './article-climate-info.component.html',
  styleUrls: ['./article-climate-info.component.scss']
})
export class ArticleClimateInfoComponent implements OnInit {
  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
