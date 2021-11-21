import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AgentService } from 'src/app/shared/service/agent/agent.service';

@Component({
  selector: 'agency-filter',
  templateUrl: './agency-filter.component.html',
  styleUrls: ['./agency-filter.component.scss']
})
export class AgencyFilterComponent implements OnInit {

  optionToShow = 3;
  buttonText= 'Mehr'
  agencyList: any[] =[];
  agencyLabel: string = '';
  reiseburo: string[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private agentService: AgentService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params['reiseburo']) {
        this.reiseburo = params['reiseburo'].split(",");
      }
      this.getAgency();
    }); 
   }

    getAgency() {
      this.agentService.getFiltredAgency(this.agencyLabel, this.optionToShow).subscribe(
        result => {
          this.agencyList = result.items;
         console.log(this.agencyList)
          
          this.route.queryParams.subscribe(params => {
            if(params['reiseburo']) {
              this.reiseburo = params['reiseburo'].split(",");
            }
          });
        }
      );
    }

    getNameAgenceByUuid(uid:string){
      let agencyName;
      for(let i = 0;i<this.agencyList.length;i++){
        if(this.agencyList[i].agencyUuid === uid){
          agencyName = this.agencyList[i].agencyName;
        }
      }
      return agencyName;
    }

  showMore() {
    if( this.optionToShow === 3 ) {
      this.optionToShow = -1;
      this.buttonText = 'Weniger',
      this.getAgency();
    } else {
      this.optionToShow = 3;
      this.buttonText = 'Mehr';
      this.getAgency();
      
    }
  }

  checkValue(agencyLabel: string, event:Event){
    
    const ischecked = (<HTMLInputElement>event.target).checked;
    if(ischecked) {
      this.reiseburo.push(agencyLabel);
    } else {
      this.reiseburo = this.reiseburo.filter(item => item !== agencyLabel);
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        reiseburo: this.reiseburo.join(',')
      },
      queryParamsHandling: 'merge'
    });
  }
}
