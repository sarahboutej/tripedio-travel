import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([ Navigation ]);

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
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
      src: 'assets/images/owl-1.webp',
      title: 'Afrika'
    },
    {
      id: '2',
      src: 'assets/images/owl-2.webp',
      title: 'Asien'
    },
    {
      id: '3',
      src: 'assets/images/owl-3.webp',
      title: 'Australien'
    },
    {
      id: '4',
      src: 'assets/images/owl-4.webp',
      title: 'Europa'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
