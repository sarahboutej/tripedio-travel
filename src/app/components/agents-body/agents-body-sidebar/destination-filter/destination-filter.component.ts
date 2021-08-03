import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-filter',
  templateUrl: './destination-filter.component.html',
  styleUrls: ['./destination-filter.component.scss']
})
export class DestinationFilterComponent implements OnInit {
  destinationSelectedValue = '';
  destinationsList = [
    { id: 1, name: 'Egypt' },
    { id: 2, name: 'Albania' },
    { id: 3, name: 'Algeria' },
    { id: 4, name: 'Andorra' },
    { id: 5, name: 'Angola' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

 saveCode(e : any): void {
  let name = e.target.value;
  let destination = this.destinationsList.filter(x => x.name === name)[0];
  if( destination ) {
    this.destinationSelectedValue = destination.name;
  } else {
    this.destinationSelectedValue = '';
  }
}

}
