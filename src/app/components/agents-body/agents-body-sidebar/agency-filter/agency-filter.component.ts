import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agency-filter',
  templateUrl: './agency-filter.component.html',
  styleUrls: ['./agency-filter.component.scss']
})
export class AgencyFilterComponent implements OnInit {

  optionToShow = 3;
  buttonText= 'Mehr'
  agencyList: any[] =[
    {
      "agencyId": 1,
      "agencyLabel": " Reisebüro 1",
    },
    {
      "agencyId": 2,
      "agencyLabel": " Reisebüro 2",
    },
    {
      "agencyId": 3,
      "agencyLabel": " Reisebüro 3",
    },
    {
      "agencyId": 4,
      "agencyLabel": " Reisebüro 4",
    },
    {
      "agencyId": 5,
      "agencyLabel": " Reisebüro 5",
    },
    {
      "agencyId": 6,
      "agencyLabel": " Reisebüro 6",
    },
    {
      "agencyId": 7,
      "agencyLabel": " Reisebüro 7",
    },
    {
      "agencyId": 8,
      "agencyLabel": " Reisebüro 8",
    }
];

agencyListToShow:any [] = [];

  constructor() { }

  ngOnInit(): void {
    this.agencyListToShow = this.agencyList.slice(0,3);
  }

  showMore() {
    if( this.optionToShow === 3 ) {
      this.optionToShow = -1;
      this.buttonText = 'Weniger',
      this.agencyListToShow = this.agencyList;
    } else {
      this.optionToShow = 3;
      this.buttonText = 'Mehr';
      this.agencyListToShow = this.agencyList.slice(0,3);
    }
  }

}
