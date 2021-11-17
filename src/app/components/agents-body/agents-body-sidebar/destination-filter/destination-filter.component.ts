import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from 'src/app/shared/service/agent/agent.service';

@Component({
  selector: 'destination-filter',
  templateUrl: './destination-filter.component.html',
  styleUrls: ['./destination-filter.component.scss']
})
export class DestinationFilterComponent implements OnInit {
  destinationSelectedValue = '';
  destinationsList: any[] = [];

  selectedDestinations: string[] = [];
  places: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private agentService: AgentService) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      if(params['reiseziele']) {
        var listDestinations = params['reiseziele'].split(",");
        this.getPlaces(listDestinations);
      }
      this.getDestinations();
    });
  }

  getPlaces(listDestinations:any){
    this.places=[];
    this.selectedDestinations = [];
    this.agentService.getPlaces().subscribe(response => {
      this.places=response;
      for( var destination of listDestinations){
        if(this.places.find(x => x.superPlaceLabel === destination)){
          this.selectedDestinations.push(destination);
          this.selectedDestinations = this.selectedDestinations.filter((test, index, array) =>
           index === array.findIndex((findTest) =>
              findTest === test
           )
        );
        }
      }
      
      this.commitedDestinations = Object.assign([], this.selectedDestinations);
    }, error => {
    });

  }

  getDestinations() {
    this.agentService.getFiltredPlaces(this.destinationSelectedValue, 84).subscribe(
      result => {
        this.destinationsList = [...result.items];
        this.destinationsList = this.destinationsList.filter((test, index, array) =>
           index === array.findIndex((findTest) =>
              findTest.superPlaceLabel === test.superPlaceLabel
           )
        );
      }
    );
  }

  getFiltredDestination(text: any): void {
    this.agentService.getFiltredPlaces(text, 84).subscribe(
      result => {
        this.destinationsList = [...result.items];
        this.destinationsList = this.destinationsList.filter((test, index, array) =>
        index === array.findIndex((findTest) =>
           findTest.superPlaceLabel === test.superPlaceLabel
        )
     );
      }
    );
  }

  removeDestination(destinationName: string) {
    this.selectedDestinations = this.selectedDestinations.filter(item => item !== destinationName);
    this.commitedDestinations = this.commitedDestinations.filter(item => item !== destinationName);
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

}
