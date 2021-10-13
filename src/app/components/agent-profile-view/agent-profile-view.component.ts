import { Component, OnInit, Input,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/service/utils.service';
import { AgentService } from 'src/app/shared/service/agent/agent.service';
import { AppointementModalComponent } from '../appointement-modal/appointement-modal.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-agent-profile-view',
  templateUrl: './agent-profile-view.component.html',
  styleUrls: ['./agent-profile-view.component.scss']
})
export class AgentProfileViewComponent implements OnInit {

  agent: any;
  listCountries:any=[];
  listactivities:any=[];

  urlBack= UtilsService.BASE_API_URL;

  abbriviation='';
  htmlDescription = '';

  @Input()
  agentUuid: any = '';

  @ViewChild('modal') private modalComponent!: AppointementModalComponent;

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
    const newListOfCountry:any=[];
    this.agentService.getAgentPlaces(uuid).subscribe(response => {
      this.listCountries=response;
      this.listCountries.forEach((country: any, index: Number) => {
        const newElemtCountry = {
          "specialityId": country.specialityId,
          "specialityLabel": country.specialityLabel,
          "specialityDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "specialityPhotos": [{}]
        }
        const elemtObj = {
          "mediaUrl": String,
        }
        newElemtCountry.specialityPhotos.shift();
        if (index === 0) {
          newElemtCountry.specialityPhotos.push({
            "mediaUrl": "assets/images/one.webp",
          });
          newElemtCountry.specialityPhotos.push({
            "mediaUrl": "assets/images/two.webp",
          });
          newElemtCountry.specialityPhotos.push({
            "mediaUrl": "assets/images/three.webp",
          })
        } else if (index === 1) {
          newElemtCountry.specialityPhotos.push({
            "mediaUrl": "assets/images/four.webp",
          });
          newElemtCountry.specialityPhotos.push({
            "mediaUrl": "assets/images/five.webp",
          });
        } else {
          newElemtCountry.specialityPhotos.push({
            "mediaUrl": "assets/images/three.webp",
          });
        }
        newListOfCountry.push(newElemtCountry);
      });
      this.listCountries = newListOfCountry;
    }, error => {
    });
  }

  async openModal() {
    return await this.modalComponent.open(this.agentUuid);
  }

}
