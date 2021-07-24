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
      title: 'Test 1'
    },
    {
      id: '2',
      src: 'assets/images/owl-2.jpeg',
      title: 'Test 2'
    },
    {
      id: '3',
      src: 'assets/images/owl-3.jpg',
      title: 'Test 3'
    },
    {
      id: '4',
      src: 'assets/images/owl-4.jpg',
      title: 'Test 4'
    },
    {
      id: '5',
      src: 'assets/images/owl-1.jpg',
      title: 'Test 5'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
