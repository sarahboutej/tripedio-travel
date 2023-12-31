import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AgentService } from 'src/app/shared/service/agent/agent.service';
import { UtilsService } from 'src/app/shared/service/utils.service';
import { AppointementModalComponent } from '../appointement-modal/appointement-modal.component';
import { ModalConfig } from '../appointement-modal/modal.config';

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
  htmlDescription = '';
  @Input()
  agentUuid: any = '';
  playVideo: boolean = true;
  mute: boolean = false;
  @ViewChild('modal') private modalComponent!: AppointementModalComponent;

  modalConfig: ModalConfig={
    modalTitle: 'Beratungstermin anfragen',
    dismissButtonLabel: 'Senden',
    closeButtonLabel: 'Abbrechen'
  }


  constructor(private agentService:AgentService,private router: Router) { }

  ngOnInit(): void {
    this.agentService.getAgentByUuid(this.agentUuid).subscribe(response => {
      this.agent=response;
      if(this.agent && this.agent.agentDescription) {
        var descriptionLine = this.agent.agentDescription.split('\n');
        descriptionLine.forEach((line:any) => {
         this.htmlDescription += '<p>'+line+'</p>'
        });
      }
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
    }, error => {
        this.router.navigateByUrl('/notfoundpage');
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
      this.listCountries=response;
    }, error => {
    });

  }

  async openModal() {
    return await this.modalComponent.open(this.agentUuid);
  }
  
  triggerVideo() {
    var myVideo: any = document.getElementById("agent-video");
    if (myVideo.paused) {
      myVideo.play();
      this.playVideo = false;
    }
    else {
      myVideo.pause();
      this.playVideo = true;
    }
  }

  triggerMute() {
    var myVideo: any = document.getElementById("agent-video");
    if (myVideo.muted) {
       this.mute = true;
        myVideo.muted = false;
    }
    else {
      this.mute = false;
      myVideo.muted = true;
    }
  }

  triggerReload() {
    var myVideo: any = document.getElementById("agent-video");
    myVideo.currentTime = 0;
    myVideo.play();
  }

}
