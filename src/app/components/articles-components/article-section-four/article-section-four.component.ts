import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-section-four',
  templateUrl: './article-section-four.component.html',
  styleUrls: ['./article-section-four.component.scss']
})
export class ArticleSectionFourComponent implements OnInit {
  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
