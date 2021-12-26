import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from 'src/app/shared/service/agent/agent.service';

@Component({
  selector: 'destination-filter',
  templateUrl: './destination-filter.component.html',
  styleUrls: ['./destination-filter.component.scss']
})
export class DestinationFilterComponent implements OnInit {
  pageSize:number = 30;

  destinationSelectedValue = '';
  destinationsList: any[] = [];
  destinationsLoading = false;
  destinationsSize: number = 0;
  destinationsPage: number = 0;

  selectedDestinations: string[] = [];
  places: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private agentService: AgentService) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      if(params['reiseziele']) {
        var listDestinations = params['reiseziele'].split(",");
        this.getPlaces(listDestinations);
      }
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
  
  //Places filter select
  getFiltredDestination(text: any) {
    this.destinationsPage = -1;
    this.places = [];
    this.fetchMoreDestinations(text.term);
  }

  onOpenDestinations() {
    this.destinationsPage = -1;
    this.places = [];
    this.fetchMoreDestinations();
  }

  onScrollDestinations(text: any, event: any) {
    if (this.destinationsLoading || this.destinationsSize <= (this.destinationsList.length + this.selectedDestinations.length)) {
        return;
    }

    if (event.end + 10 >= (this.destinationsList.length + this.selectedDestinations.length)) {
        this.fetchMoreDestinations(text);
    }
  }

  fetchMoreDestinations(text?: any) {
    this.destinationsPage++;
    this.destinationsLoading = true;
    this.agentService.getFiltredPlaces(text, this.pageSize, this.destinationsPage).subscribe(
      result => {
        this.destinationsLoading = false;
        this.destinationsSize = result.count;
        this.destinationsList = [...this.destinationsList, ...result.items];
      },
      err => {
        this.destinationsLoading = false;
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
