import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AgentService } from 'src/app/shared/service/agent/agent.service';

@Component({
  selector: 'app-header-tabs',
  templateUrl: './header-tabs.component.html',
  styleUrls: ['./header-tabs.component.scss']
})
export class HeaderTabsComponent implements OnInit {
  pageSize:number = 30;


  places: Array<any> = [];
  selectedPlacesItems: Array<any> = [];
  placesLoading = false;
  palcesSize: number = 0;
  palcesPage: number = 0;

  activities: Array<any> = [];
  selectedActivityItems: Array<any> = [];
  activitiesLoading = false;
  activitiesSize: number = 0;
  activitiesPage: number = 0;

  constructor(private router: Router, private agentService: AgentService) { }

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

  //Places filter select
  getFiltredPlaces(text: any) {
    this.palcesPage = -1;
    this.places = [];
    this.fetchMorePlaces(text.term);
  }

  onOpenPlaces() {
    this.palcesPage = -1;
    this.places = [];
    this.fetchMorePlaces();
  }
  
  onScrollPlaces(text: any, event: any) {
    if (this.placesLoading || this.palcesSize <= this.places.length) {
        return;
    }

    if (event.end + 10 >= this.places.length) {
        this.fetchMorePlaces(text);
    }
  }

  fetchMorePlaces(text?: any) {
    this.palcesPage++;
    this.placesLoading = true;
    this.agentService.getFiltredPlaces(text, this.pageSize, this.palcesPage).subscribe(
      result => {
        this.placesLoading = false;
        this.palcesSize = result.count;
        this.places = [...this.places, ...result.items];
      },
      err => {
        this.placesLoading = false;
      }
    );
  }

  //Activities filter select
  getFiltredActivities(text: any) {
    this.activitiesPage = -1;
    this.activities = [];
    this.fetchMoreActivities(text.term);
  }

  onOpenActivities() {
    this.activitiesPage = -1;
    this.activities = [];
    this.fetchMoreActivities();
  }
  
  onScrollActivities(text: any, event: any) {
    if (this.activitiesLoading || this.activitiesSize <= this.activities.length) {
        return;
    }

    if (event.end + 10 >= this.activities.length) {
        this.fetchMorePlaces(text);
    }
  }

  fetchMoreActivities(text?: any) {
    this.activitiesPage++;
    this.activitiesLoading = true;
    this.agentService.getFiltredActivities(text, this.pageSize, this.activitiesPage).subscribe(
      result => {
        this.activitiesLoading = false;
        this.activitiesSize = result.count;
        this.activities = [...this.activities, ...result.items];
      },
      err => {
        this.activitiesLoading = false;
      }
    );
  }
}
