import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'destination-nav-item',
  templateUrl: './destination-nav-item.component.html',
  styleUrls: ['./destination-nav-item.component.scss']
})
export class DestinationNavItemComponent implements OnInit {

  @Input()
  destination: any;
  BASE_STRAPI_API_URL = UtilsService.BASE_STRAPI_API_URL;
  constructor() { }

  ngOnInit(): void {
  }

}
