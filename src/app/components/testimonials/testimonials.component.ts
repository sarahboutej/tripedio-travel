import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  slideOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
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

  testimonialsItems = [
    {
      id: '1',
      avatar: 'assets/images/user1.jpg',
      userName: 'Florian B',
      title: 'Super Easy',
      stars: 5,
      description: 'Die Suche und das Gespräch mit dem idealen Reiseexperten für unsere Reise war super einfach und bequem, habe mich noch nie in besseren Händen gefühlt.',
      userInfo: 'Kreuzfahrt, Ostsee'
    },
    {
      id: '2',
      avatar: 'assets/images/user2.jpg',
      userName: 'Isabel B',
      title: 'Unvergessliches Erlebnis',
      stars: 5,
      description: 'Unsere Familie hatte einen tollen Urlaub in Südafrika, den wir nie vergessen werden.',
      userInfo: 'Pauschalurlaub, Südafrika'
    },
    {
      id: '3',
      avatar: 'assets/images/user3.jpg',
      userName: 'Maria M',
      title: 'Großartige Beratung!',
      stars: 5,
      description: 'Unser Reiseexperte kannte sich mit Wander- und Radtouren sehr gut aus und hat eine perfekte Reise für uns geplant!',
      userInfo: 'Wandern und Radfahren, Griechenland'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

}
