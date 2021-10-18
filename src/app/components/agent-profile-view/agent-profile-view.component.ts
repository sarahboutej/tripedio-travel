import { Component, OnInit, Input,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/service/utils.service';
import { AgentService } from 'src/app/shared/service/agent/agent.service';
import { AppointementModalComponent } from '../appointement-modal/appointement-modal.component';
import { ModalConfig } from '../appointement-modal/modal.config';

@Component({
  selector: 'app-agent-profile-view',
  templateUrl: './agent-profile-view.component.html',
  styleUrls: ['./agent-profile-view.component.scss']
})
export class AgentProfileViewComponent implements OnInit {

  agent: any;
  listCountries:any=[];
  listactivities:any=[];
  listGalleries:any=[];

  isFullDescription: boolean = false;
  btnLabel: string = '+More'

  urlBack= UtilsService.BASE_API_URL;

  abbriviation='';
  htmlDescription = '';

  @Input()
  agentUuid: any = '';

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
        descriptionLine.forEach((line:any, index:Number) => {
         if(index === descriptionLine.length-1) {
           this.htmlDescription += '<p class="desc-paragraph">'+line+'</p>'
         } else {
           this.htmlDescription += '<p >'+line+'</p>'
         }
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
    this.getAgentGalleries(this.agentUuid);
  }

  getAgentActivities(uuid:any){
    this.listactivities=[];
    this.agentService.getAgentActivities(uuid).subscribe(response => {
      this.listactivities=response;
    }, error => {
      console.log(error);
    });

  }

  getAgentPlaces(uuid:any){
    this.listCountries=[];
    this.agentService.getAgentPlaces(uuid).subscribe(response => {
      this.listCountries=response;
    }, error => {
      console.log(error);
    });
  }

  async openModal() {
    console.log(this.modalComponent);
    return await this.modalComponent.open(this.agentUuid);
  }

  displayFullDescription() {
    this.isFullDescription = !this.isFullDescription;
    var descTag: any = document.getElementById("agent-decription");
    if ( this.isFullDescription ) {
      descTag.classList.add('show-full-description');
      this.btnLabel = "-Less"
    } else {
      descTag.classList.remove('show-full-description');
      this.btnLabel = "+More"
    }
  }

  getAgentGalleries(uuid:any){
    this.listGalleries=[];
    this.agentService.getAgentGalleries(uuid).subscribe(response => {
      this.listGalleries=response;
      console.log(this.listGalleries);
    }, error => {
      console.log(error);
    });
  }

}
