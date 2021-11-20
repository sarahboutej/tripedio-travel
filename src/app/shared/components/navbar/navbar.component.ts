import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../service/article/article.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  showNavbarMobileMenu: boolean = false;
  showDestinationsMobileMenu: boolean = false;

  destinations = [];

  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.articleService.getRegions().subscribe(response => {
      console.log(response)
      this.destinations=response;
    }, error => {
      console.log(error);
    });
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
