import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})
export class ArticleHeaderComponent implements OnInit {
  @Input() data : any;
  constructor() { }
  BASE_STRAPI_API_URL = UtilsService.BASE_STRAPI_API_URL;
  ngOnInit(): void {
  }
  
}
