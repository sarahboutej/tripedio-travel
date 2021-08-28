import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentService } from 'src/app/shared/service/agent/agent.service';

@Component({
  selector: 'app-agents-body',
  templateUrl: './agents-body.component.html',
  styleUrls: ['./agents-body.component.scss']
})
export class AgentsBodyComponent implements OnInit {
  filtredAgents: any[] = [];
  filtredAgentsCount: number = 0;
  filtredMap: any = {
    offset: 10
  };

  displaySidebar: boolean = false;

  constructor(private route: ActivatedRoute, private agentService: AgentService) { }

  ngOnInit(): void {
    this.filtredMap.page = 1;
    this.filtredMap.noConsultancyFee = false;
    this.route.queryParams.subscribe(params => {
      this.filtredMap.activity = params['reisearten'] ? params['reisearten'].split(",") : [];
      this.filtredMap.place = params['reiseziele'] ? params['reiseziele'].split(",") : [];
      this.getFiltredAgents();
    });
  }

  getFiltredAgents() {
    this.agentService.getFiltredAgents(this.filtredMap).subscribe(
      result => {
        this.filtredAgentsCount = result.count;
        this.filtredAgents = [...result.items];
      }
    );
  }

  consultancyFeeChange(event: any) {
    this.filtredMap.noConsultancyFee = event || false;

    this.agentService.getFiltredAgents(this.filtredMap).subscribe(
      result => {
        this.filtredAgentsCount = result.count;
        this.filtredAgents = [...result.items];
      }
    );
  }
  
  displaySidebarMobile() {
    this.displaySidebar = !this.displaySidebar;
  }
  
  onScrollDown() {  
    if(this.filtredAgentsCount > 0 && this.filtredMap.page * this.filtredMap.offset < this.filtredAgentsCount) {
      console.log("onScrollDown");
      this.filtredMap.page = this.filtredMap.page + 1;
      this.agentService.getFiltredAgents(this.filtredMap).subscribe(
        result => {
          this.filtredAgents = [...this.filtredAgents, ...result.items];
        }
      );
    }
  }
}
