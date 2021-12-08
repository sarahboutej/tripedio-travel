import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AgentService } from 'src/app/shared/service/agent/agent.service';

@Component({
  selector: 'app-land-filter',
  templateUrl: './land-filter.component.html',
  styleUrls: ['./land-filter.component.scss']
})
export class LandFilterComponent implements OnInit {

  landSelectedValue = '';
  landList: any[] = [];
  selectedLands: string[] = [];
  lands: any[] = [];
  commitedLands: string[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private agentService: AgentService) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      if(params['land']) {
        var listLands = params['land'].split(",");
        this.getLands(listLands);
      }
      this.getFiltredLands();
    });
  }

  getLands(listLands:any){
    this.lands=[];
    this.selectedLands = [];
    this.agentService.getLands().subscribe(response => {
      this.lands=response;
      for( var land of listLands){
        if(this.lands.find(x => x.superPlaceLabel === land)){
          this.selectedLands.push(land);
          this.selectedLands = this.selectedLands.filter((test, index, array) =>
           index === array.findIndex((findTest) =>
              findTest === test
           )
        );
        }
      }
      
      this.commitedLands = Object.assign([], this.selectedLands);
    }, error => {
    });

  }

  getFiltredLands() {
    this.agentService.getFiltredLands(this.landSelectedValue, 84).subscribe(
      result => {
        this.landList = [...result.items];
        this.landList = this.landList.filter((test, index, array) =>
           index === array.findIndex((findTest) =>
              findTest.superPlaceLabel === test.superPlaceLabel
           )
        );
      }
    );
  }

  getFiltredLands2(text: any): void {
    this.agentService.getFiltredLands(text, 84).subscribe(
      result => {
        this.landList = [...result.items];
        this.landList = this.landList.filter((test, index, array) =>
        index === array.findIndex((findTest) =>
           findTest.superPlaceLabel === test.superPlaceLabel
        )
     );
      }
    );
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
