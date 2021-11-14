import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'article-travel-combination',
  templateUrl: './article-travel-combination.component.html',
  styleUrls: ['./article-travel-combination.component.scss']
})
export class ArticleTravelCombinationComponent implements OnInit {
  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
