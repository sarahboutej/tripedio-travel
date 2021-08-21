import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from 'src/app/shared/service/agent/agent.service';

@Component({
  selector: 'app-destination-filter',
  templateUrl: './destination-filter.component.html',
  styleUrls: ['./destination-filter.component.scss']
})
export class DestinationFilterComponent implements OnInit {
  destinationSelectedValue = '';
  destinationsList: any[] = [];

  selectedDestinations: string[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private agentService: AgentService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params['reiseziele']) {
        this.selectedDestinations = params['reiseziele'].split(",");
        this.commitedDestinations = Object.assign([], this.selectedDestinations);
      }
      this.getDestinations();
    });
  }

  getDestinations() {
    this.agentService.getFiltredPlaces(this.destinationSelectedValue, 5).subscribe(
      result => {
        this.destinationsList = [...result];
      }
    );
  }

  getFiltredDestination(text: any): void {
    this.agentService.getFiltredPlaces(text, 5).subscribe(
      result => {
        this.destinationsList = [...result];
      }
    );
  }

  removeDestination(destinationName: string) {
    this.selectedDestinations = this.selectedDestinations.filter(item => item !== destinationName);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        reiseziele: this.selectedDestinations.join(',')
      },
      queryParamsHandling: 'merge'
    });
  }

  commitedDestinations: string[] = [];

  commitSelectedDestinations(destinationLabel: string, isChecked: boolean) {
    if(isChecked) {
      this.commitedDestinations.push(destinationLabel);
    } else {
      this.commitedDestinations = this.commitedDestinations.filter(item => item !== destinationLabel);
    }
  }

  pushSelectedDestinations() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        reiseziele: this.commitedDestinations.join(',')
      },
      queryParamsHandling: 'merge'
    });
  }

  test() {}
}
