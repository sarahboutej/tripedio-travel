import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AgentService } from 'src/app/shared/service/agent/agent.service';

@Component({
  selector: 'app-header-tabs',
  templateUrl: './header-tabs.component.html',
  styleUrls: ['./header-tabs.component.scss']
})
export class HeaderTabsComponent implements OnInit {
  places: Array<any> = [];
  selectedPlacesItems: Array<any> = [];

  activities: Array<any> = [];
  selectedActivityItems: Array<any> = [];

  constructor(private route: ActivatedRoute, private router: Router, private agentService: AgentService) { }

  ngOnInit(): void { }

  public goToAgentsList() {
    this.router.navigateByUrl(`/agents`)
  }

  getFiltredPlaces(text: any) {
    this.agentService.getFiltredPlaces(text.term).subscribe(
      result => {
        this.places = [...result];
      }
    );
  }

  getFiltredActivities(text: any) {
    this.agentService.getFiltredActivities(text.term).subscribe(
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
