import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from 'src/app/shared/service/agent/agent.service';

@Component({
  selector: 'app-travel-type-filter',
  templateUrl: './travel-type-filter.component.html',
  styleUrls: ['./travel-type-filter.component.scss']
})
export class TravelTypeFilterComponent implements OnInit {
  optionToShow = 5;
  buttonText= 'Vollständige Liste öffnen'
  travelTypeOption: any[] = [];

  activityLabel: string = '';
  reisearten: string[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private agentService: AgentService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params['reisearten']) {
        this.reisearten = params['reisearten'].split(",");
      }
      this.getActivities();
    });
  }

  getActivities() {
    this.agentService.getFiltredActivities(this.activityLabel, this.optionToShow).subscribe(
      result => {
        this.travelTypeOption = result.items;
        this.route.queryParams.subscribe(params => {
          if(params['reisearten']) {
            this.reisearten = params['reisearten'].split(",");
          }
        });
      }
    );
  }

  showMore() {
    if( this.optionToShow === 5 ) {
      this.optionToShow = -1;
      this.buttonText = 'Zeige weniger'
      this.getActivities();
    } else {
      this.optionToShow = 5;
      this.buttonText = 'Vollständige Liste öffnen'
      this.getActivities();
    }
  }

  checkValue(activityTypeLabel: string, event:Event){
    const ischecked = (<HTMLInputElement>event.target).checked;
    if(ischecked) {
      this.reisearten.push(activityTypeLabel);
    } else {
      this.reisearten = this.reisearten.filter(item => item !== activityTypeLabel);
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        reisearten: this.reisearten.join(',')
      },
      queryParamsHandling: 'merge'
    });
  }
}
