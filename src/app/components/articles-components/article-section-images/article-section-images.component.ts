import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'article-section-images',
  templateUrl: './article-section-images.component.html',
  styleUrls: ['./article-section-images.component.scss']
})
export class ArticleSectionImagesComponent implements OnInit {
  @Input() data : any;
  constructor() { }
  BASE_STRAPI_API_URL = UtilsService.BASE_STRAPI_API_URL;
  ngOnInit(): void {
  }

}
