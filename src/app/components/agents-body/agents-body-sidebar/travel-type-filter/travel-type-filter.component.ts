import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-type-filter',
  templateUrl: './travel-type-filter.component.html',
  styleUrls: ['./travel-type-filter.component.scss']
})
export class TravelTypeFilterComponent implements OnInit {
  optionToShow = 5;
  buttonText= 'Vollständige Liste öffnen'
  travelTypeOption = [
    {
      'name': 'sport',
      'value':'Sport'
    },
    {
      'name': 'golf',
      'value':'Golf'
    },
    {
      'name': 'packing',
      'value':'Packing travel'
    },
    {
      'name': 'Cruise',
      'value':'Cruise'
    },
    {
      'name': 'Health',
      'value':'Health'
    },
    {
      'name': 'mixture',
      'value':'Mixture'
    },
    {
      'name': 'sympathy',
      'value':'Sympathy'
    },
    {
      'name': 'internet',
      'value':'Internet'
    },
    {
      'name': 'sister',
      'value':'Sister'
    },
    {
      'name': 'soup',
      'value':'Soup'
    },
    {
      'name': 'actor',
      'value':'Actor'
    },
    {
      'name': 'entry',
      'value':'Entry'
    },
    {
      'name': 'length',
      'value':'Length'
    },
    {
      'name': 'death',
      'value':'Death'
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

  showMore() {
    if( this.optionToShow === 5 ) {
      this.optionToShow = this.travelTypeOption.length;
      this.buttonText = 'Zeige weniger'
    } else {
      this.optionToShow = 5;
      this.buttonText = 'Vollständige Liste öffnen'
    }
  }

}
