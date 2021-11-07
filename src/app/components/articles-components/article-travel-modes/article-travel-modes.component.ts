import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article-travel-modes',
  templateUrl: './article-travel-modes.component.html',
  styleUrls: ['./article-travel-modes.component.scss']
})
export class ArticleTravelModesComponent implements OnInit {

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

  travelModes = [
    {
      id: '1',
      image: 'assets/images/travel-mode1.webp',
      title: 'Luxusurlaub Südafrika'
    },
    {
      id: '2',
      image: 'assets/images/travel-mode2.webp',
      title: 'Golfurlaub Südafrika'
    },
    {
      id: '3',
      image: 'assets/images/travel-mode3.webp',
      title: 'Safari Kenia'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

}
