import { Component, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([ Navigation ]);

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
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    },
    nav: true
  };

  images = [
    { 
      id: '1',
      src: 'assets/images/travel-type-1.webp?quality=auto&size=300w400h',
      title: 'Kreuzfahrt'
    },
    { 
      id: '2',
      src: 'assets/images/travel-type-2.webp?quality=auto&size=300w400h',
      title: 'Pauschalreise'
    },
    { 
      id: '3',
      src: 'assets/images/travel-type-4.webp?quality=auto&size=300w400h',
      title: 'Golfurlaub'
    },
    { 
      id: '4',
      src: 'assets/images/travel-type-3.webp?quality=auto&size=300w400h',
      title: 'Wanderurlaub'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
}
