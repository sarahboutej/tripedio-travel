import { Component, OnInit } from '@angular/core';

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
      src: 'assets/images/owl-1.jpg',
      title: 'Afrika'
    },
    {
      id: '2',
      src: 'assets/images/owl-2.jpeg',
      title: 'Asien'
    },
    {
      id: '3',
      src: 'assets/images/owl-3.jpg',
      title: 'Australien'
    },
    {
      id: '4',
      src: 'assets/images/owl-4.jpg',
      title: 'Europa'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
