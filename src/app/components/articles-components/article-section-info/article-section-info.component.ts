import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'article-section-info',
  templateUrl: './article-section-info.component.html',
  styleUrls: ['./article-section-info.component.scss']
})
export class ArticleSectionInfoComponent implements OnInit {
  @Input() data : any;
  BASE_STRAPI_API_URL = UtilsService.BASE_STRAPI_API_URL;
  constructor() { }

  ngOnInit(): void {
  }

}
