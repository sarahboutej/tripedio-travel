import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-utils-information',
  templateUrl: './article-utils-information.component.html',
  styleUrls: ['./article-utils-information.component.scss']
})
export class ArticleUtilsInformationComponent implements OnInit {
  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
