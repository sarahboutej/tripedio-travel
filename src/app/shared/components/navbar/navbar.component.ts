import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  showNavbarMobileMenu: boolean = false;

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

}
