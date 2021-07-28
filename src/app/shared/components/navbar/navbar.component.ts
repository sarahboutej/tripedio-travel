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
  }


}
