import { Component, OnInit, Input } from '@angular/core';

import { AgentService } from 'src/app/shared/service/agent/agent.service';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss']
})
export class AgentProfileComponent implements OnInit {
  agent: any;
  listCountries:any=[];
  listactivities:any=[];
  urlBack= UtilsService.BASE_API_URL;
  abbriviation='';
  @Input()
  agentUuid: any = '';


  constructor(private agentService:AgentService) { }

  ngOnInit(): void {
    this.agentService.getAgentByUuid(this.agentUuid).subscribe(response => {
      this.agent=response;
      if(this.agent!= null&&this.agent!=undefined&&this.agent.agentPhoto==null){
        const fullName = this.agent.agentFirstName+' '+this.agent.agentLastName;
        const intials = fullName.split(' ').map(name => name[0]).join('').toUpperCase(); 
        this.abbriviation=intials;
        const profileImage = document.getElementById('profileImageEdit');
        if(profileImage!=null){
          profileImage.innerHTML = intials;
        }

        const profileImageMobile = document.getElementById('profileImageEditMobile');
        if(profileImageMobile!=null){
          profileImageMobile.innerHTML = intials;
        }
        
      }
    });
    this.getAgentActivities(this.agentUuid);
    this.getAgentPlaces(this.agentUuid);

  }

  getAgentActivities(uuid:any){
    this.listactivities=[];
    this.agentService.getAgentActivities(uuid).subscribe(response => {
      this.listactivities=response;
    }, error => {
    });

  }

  getAgentPlaces(uuid:any){
    this.listCountries=[];
    this.agentService.getAgentPlaces(uuid).subscribe(response => {
      console.log(response);
      this.listCountries=response;
    }, error => {
    });

  }

}
