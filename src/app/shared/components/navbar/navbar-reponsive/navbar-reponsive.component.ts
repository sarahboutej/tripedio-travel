import { Component, OnInit, Input,Output, EventEmitter} from '@angular/core';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'navbar-reponsive',
  templateUrl: './navbar-reponsive.component.html',
  styleUrls: ['./navbar-reponsive.component.scss']
})
export class NavbarReponsiveComponent implements OnInit {

  @Output() hideDestination = new EventEmitter<boolean>();

  @Input() destinations: any = [];

  destinationName: any = 'afrika';

  destination: any;
  BASE_STRAPI_API_URL = UtilsService.BASE_STRAPI_API_URL;
  constructor() { }

  ngOnInit(): void {
    this.destination = this.destinations.find((item:any) => item.Name === this.destinationName)
  }
  
  destinationToDisplay(item:any) {
    if (this.destinationName === item) {
      this.destinationName === ''
    } else {
      this.destinationName = item
    }
    this.destination = this.destinations.find((destItem:any) => destItem.Name === item)
  }

  hideDestinationmenu() {
    this.hideDestination.emit();
  }
}
