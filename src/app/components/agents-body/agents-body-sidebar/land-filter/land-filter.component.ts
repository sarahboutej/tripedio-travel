import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AgentService } from 'src/app/shared/service/agent/agent.service';
import * as i18nIsoCountries from 'i18n-iso-countries';
declare var require: any;

@Component({
  selector: 'app-land-filter',
  templateUrl: './land-filter.component.html',
  styleUrls: ['./land-filter.component.scss']
})
export class LandFilterComponent implements OnInit {

  landSelectedValue = '';
  landList: any[] = [];
  selectedLands: string[] = [];
  commitedLands: string[] = [];
  
  countries:any = [];

  constructor(private router: Router, private route: ActivatedRoute, private agentService: AgentService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params['land']) {
        this.selectedLands = params['land'].split(",");
      }
      this.initCountries();
    });
  }

  initCountries() {
    i18nIsoCountries.registerLocale(require("i18n-iso-countries/langs/de.json"));
    let indexedArray  = i18nIsoCountries.getNames('de', {select: "official"});
    this.countries=[];
    for (let key in indexedArray) {
      let value = indexedArray[key];
      this.countries.push(value);
    }
  }

  removeLand(landName: string) {
    this.selectedLands = this.selectedLands.filter(item => item !== landName);
    this.commitedLands = this.commitedLands.filter(item => item !== landName);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        land: this.selectedLands.join(',')
      },
      queryParamsHandling: 'merge'
    });
  }


  commitSelectedLands(landLabel: string, isChecked: boolean) {
    if(isChecked) {
      this.commitedLands.push(landLabel);
    } else {
      this.commitedLands = this.commitedLands.filter(item => item !== landLabel);
    }
  }

  pushSelectedLands() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        land: this.commitedLands.join(',')
      },
      queryParamsHandling: 'merge'
    });
  }

}
