import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-type',
  templateUrl: './travel-type.component.html',
  styleUrls: ['./travel-type.component.scss']
})
export class TravelTypeComponent implements OnInit {
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
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  images = [
    { 
      id: '1',
      src: 'assets/images/travel-type-1.jpg',
      title: 'Kreuzfahrt'
    },
    { 
      id: '2',
      src: 'assets/images/travel-type-2.jpg',
      title: 'Pauschalreise'
    },
    { 
      id: '3',
      src: 'assets/images/travel-type-3.jpg',
      title: 'Wanderurlaub'
    },
    { 
      id: '4',
      src: 'assets/images/travel-type-4.jpg',
      title: 'Golfurlaub'
    },
    { 
      id: '5',
      src: 'assets/images/travel-type-3.jpg',
      title: 'Wanderurlaub'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
