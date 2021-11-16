import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  showNavbarMobileMenu: boolean = false;
  showDestinationsMobileMenu: boolean = false;

  destinations = [
    {
      id: '1',
      name: 'afrika',
      destinationLabel: 'Afrika',
      destinationBg: 'assets/images/afrika-dest-bg.webp',
      place: [
        {name: 'South Afrika'},
        {name: 'Tanzania'},
        {name: 'Seychelles'},
        {name: 'Kenya'},
      ]
    },
    {
      id: '2',
      name: 'asia',
      destinationLabel: 'Asia',
      destinationBg: 'assets/images/asia-dest-bg.webp',
      place: [
        {name: 'Bhutan'},
        {name: 'Cambodia'},
        {name: 'China'},
        {name: 'India'},
      ]
    },
    {
      id: '3',
      name: 'central-america',
      destinationLabel: 'Central America',
      destinationBg: 'assets/images/central-america-dest-bg.webp',
      place: [
        {name: 'Costa Rica'},
        {name: 'Panama'}
      ]
    },
    {
      id: '4',
      name: 'europe',
      destinationLabel: 'Europe',
      destinationBg: 'assets/images/europe-dest-bg.webp',
      place: [
        {name: 'Greece'},
        {name: 'Iceland'},
        {name: 'Italy'},
        {name: 'Croatia'}
      ]
    },
    {
      id: '5',
      name: 'middle-east',
      destinationLabel: 'Middle East',
      destinationBg: 'assets/images/middle-east-dest-bg.webp',
      place: [
        {name: 'Jordan'},
        {name: 'Oman'},
        {name: 'UAE'}
      ]
    },
    {
      id: '6',
      name: 'north-america',
      destinationLabel: 'North America',
      destinationBg: 'assets/images/north-amarica-dest-bg.webp',
      place: [
        {name: 'USA'},
        {name: 'Canada'},
        {name: 'Mexico'}
      ]
    },
    {
      id: '7',
      name: 'oceania',
      destinationLabel: 'Oceania',
      destinationBg: 'assets/images/oceania-dest-bg.webp',
      place: [
        {name: 'Australia'},
        {name: 'New Zealand'}
      ]
    },
    {
      id: '8',
      name: 'south-america',
      destinationLabel: 'South America',
      destinationBg: 'assets/images/south-america-dest-bg.webp',
      place: [
        {name: 'Chile'},
        {name: 'Ecuador'},
        {name: 'Argentina'},
        {name: 'Brazil'},
      ]
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  showMobileMenu() {
    this.showNavbarMobileMenu = !this.showNavbarMobileMenu
    const bodyTag = document.body;
    const menuTag: any =  document.getElementById("navbarNav");
    if ( this.showNavbarMobileMenu ) {
      bodyTag.classList.add('mobile-menu-opened');
    } else {
      bodyTag.classList.remove('mobile-menu-opened');
    }
    if( !this.showNavbarMobileMenu && menuTag.classList.contains('show')) {
      menuTag.classList.remove('show');
    }
  }

  showDestinationsMenu() {
    this.showDestinationsMobileMenu = !this.showDestinationsMobileMenu
    const bodyTag = document.body;
    const menuTag: any =  document.getElementById("navbarNav");
    if ( this.showNavbarMobileMenu ) {
      bodyTag.classList.add('mobile-menu-opened');
    } else {
      bodyTag.classList.remove('mobile-menu-opened');
    }
    if( !this.showNavbarMobileMenu && menuTag.classList.contains('show')) {
      menuTag.classList.remove('show');
    }
  }

}
