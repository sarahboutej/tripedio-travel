import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'article-section-info',
  templateUrl: './article-section-info.component.html',
  styleUrls: ['./article-section-info.component.scss']
})
export class ArticleSectionInfoComponent implements OnInit {
  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
