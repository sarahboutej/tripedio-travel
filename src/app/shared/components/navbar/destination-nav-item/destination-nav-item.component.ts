import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'destination-nav-item',
  templateUrl: './destination-nav-item.component.html',
  styleUrls: ['./destination-nav-item.component.scss']
})
export class DestinationNavItemComponent implements OnInit {

  @Input()
  destination: any;

  constructor() { }

  ngOnInit(): void {
  }

}
