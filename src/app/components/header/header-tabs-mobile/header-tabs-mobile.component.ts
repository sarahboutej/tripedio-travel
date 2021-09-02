import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AgentService } from 'src/app/shared/service/agent/agent.service';

@Component({
  selector: 'app-header-tabs-mobile',
  templateUrl: './header-tabs-mobile.component.html',
  styleUrls: ['./header-tabs-mobile.component.scss']
})
export class HeaderTabsMobileComponent implements OnInit {

  places: Array<any> = [];
  selectedPlacesItems: Array<any> = [];

  activities: Array<any> = [];
  selectedActivityItems: Array<any> = [];

  constructor(private route: ActivatedRoute, private router: Router, private agentService: AgentService) { }

  ngOnInit(): void { }

  public goToAgentsList() {
    let queryParams: any = {};
    if(this.selectedActivityItems.length > 0) {
      queryParams.reisearten = this.selectedActivityItems.map(item => item.activityTypeLabel).join(',');
    }
    if(this.selectedPlacesItems.length > 0) {
      queryParams.reiseziele = this.selectedPlacesItems.map(item => item.superPlaceLabel).join(',');
    }
    this.router.navigate([`/reiseexperten`], { queryParams: queryParams});
  }

  getFiltredPlaces(text: any) {
    this.agentService.getFiltredPlaces(text.term, 5).subscribe(
      result => {
        this.places = [...result];
      }
    );
  }

  getFiltredActivities(text: any) {
    this.agentService.getFiltredActivities(text.term, 5).subscribe(
      result => {
        this.activities = [...result];
      }
    );
  }

  onOpen(elem: any) {
    if (elem.searchInput.nativeElement.value == "") {
      elem.close();
    }
  }
}
