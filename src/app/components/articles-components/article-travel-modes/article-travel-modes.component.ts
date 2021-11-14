import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'article-travel-modes',
  templateUrl: './article-travel-modes.component.html',
  styleUrls: ['./article-travel-modes.component.scss']
})
export class ArticleTravelModesComponent implements OnInit {
  BASE_STRAPI_API_URL = UtilsService.BASE_STRAPI_API_URL;
 @Input() data : any;
  slideOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    },
    nav: true
  };

  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

}
