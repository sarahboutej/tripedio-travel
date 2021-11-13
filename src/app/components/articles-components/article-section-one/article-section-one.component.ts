import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-section-one',
  templateUrl: './article-section-one.component.html',
  styleUrls: ['./article-section-one.component.scss']
})
export class ArticleSectionOneComponent implements OnInit {
  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
