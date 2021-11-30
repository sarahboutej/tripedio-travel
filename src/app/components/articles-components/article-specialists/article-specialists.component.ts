import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'article-specialists',
  templateUrl: './article-specialists.component.html',
  styleUrls: ['./article-specialists.component.scss']
})
export class ArticleSpecialistsComponent implements OnInit {
  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
