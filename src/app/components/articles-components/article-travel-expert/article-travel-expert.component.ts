import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article-travel-expert',
  templateUrl: './article-travel-expert.component.html',
  styleUrls: ['./article-travel-expert.component.scss']
})
export class ArticleTravelExpertComponent implements OnInit {

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
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    },
    nav: true
  };

  testimonialsItems = [
    {
      id: '1',
      avatar: 'assets/images/user1.webp',
      userName: 'Cameron Williamson',
      stars: 5,
      description: 'Die Suche und das Gespräch mit dem idealen Reiseexperten für unsere Reise war super einfach und bequem, habe mich noch nie in besseren Händen gefühlt.',
      destination: [
        { name: 'Pauschalurlaub' },
        { name: 'Südafrika' }
      ],
      travelType: [
        { name: 'Busreise' },
        { name: 'Camping' }
      ],
      matching: '95%'
    },
    {
      id: '2',
      avatar: 'assets/images/user2.webp',
      userName: 'Isabel Borend',
      stars: 5,
      description: 'Unsere Familie hatte einen tollen Urlaub in Südafrika, den wir nie vergessen werden.',
      destination: [
        { name: 'Pauschalurlaub' },
        { name: 'Südafrika' }
      ],
      travelType: [
        { name: 'Busreise' },
        { name: 'Camping' }
      ],
      matching: '95%'
    },
    {
      id: '3',
      avatar: 'assets/images/user3.webp',
      userName: 'Maria Martez',
      stars: 5,
      description: 'Unser Reiseexperte kannte sich mit Wander- und Radtouren sehr gut aus und hat eine perfekte Reise für uns geplant!',
      destination: [
        { name: 'Pauschalurlaub' },
        { name: 'Südafrika' }
      ],
      travelType: [
        { name: 'Busreise' },
        { name: 'Camping' }
      ],
      matching: '95%',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

}
