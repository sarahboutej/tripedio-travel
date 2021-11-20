import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-section-three',
  templateUrl: './article-section-three.component.html',
  styleUrls: ['./article-section-three.component.scss']
})
export class ArticleSectionThreeComponent implements OnInit {
  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
