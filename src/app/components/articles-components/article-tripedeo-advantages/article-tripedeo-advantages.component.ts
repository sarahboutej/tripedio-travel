import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'article-tripedeo-advantages',
  templateUrl: './article-tripedeo-advantages.component.html',
  styleUrls: ['./article-tripedeo-advantages.component.scss']
})
export class ArticleTripedeoAdvantagesComponent implements OnInit {
  @Input() data : any;
  BASE_STRAPI_API_URL = UtilsService.BASE_STRAPI_API_URL;

  constructor() { }

  ngOnInit(): void {
  }

}
