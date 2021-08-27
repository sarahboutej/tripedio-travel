import { Component, OnInit, Input, ViewChild, TemplateRef, Injectable } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig } from './modal.config';
import { AgentService } from 'src/app/shared/service/agent/agent.service';
import { AppointementModel } from 'src/app/shared/model/appointement.model';
import { AppointmentService } from 'src/app/shared/service/appointment/appointment.service';
import { ActivityTypeModel } from 'src/app/shared/model/activity-type.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-appointement-modal',
  templateUrl: './appointement-modal.component.html',
  styleUrls: ['./appointement-modal.component.scss'],
  providers: [DatePipe]
})
@Injectable()
export class AppointementModalComponent implements OnInit {

  @Input() public modalConfig!: ModalConfig;
  @ViewChild('modal') private modalContent!: TemplateRef<AppointementModalComponent>;
  private modalRef!: NgbModalRef;
  places: Array<any> = [];
  selectedPlacesItems: Array<any> = [];
  activities: Array<any> = [];
  selectedActivityItems: Array<any> = [];
  selectedDate = new Date();
  startAt = new Date();
  appointementPlaces: Array<any> = [];
  appointementActivities: Array<any> = [];
  appointement:AppointementModel=new AppointementModel(new Date(),"","","","",this.appointementPlaces,this.appointementActivities,0,"Single","");

  
  selected:string="";

  agentUuid='';

  format = 'yyyy-MM-dd';
  availibilities: Array<any> = [];

  constructor(private modalService: NgbModal, private agentService: AgentService,private appointmentService:AppointmentService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.initialise();
   }

  open(agentUuid:any): Promise<boolean> {
    this.agentUuid=agentUuid;
    this.initialise();
    return new Promise<boolean>(resolve => {
      this.modalRef = this.modalService.open(this.modalContent)
      this.modalRef.result.then(resolve, resolve)
    })
  }

  async close(): Promise<void> {
    this.initialise();
    if (this.modalConfig.shouldClose === undefined || (await this.modalConfig.shouldClose())) {
      const result = this.modalConfig.onClose === undefined || (await this.modalConfig.onClose())
      this.modalRef.close(result)
    }
  }

  async dismiss(): Promise<void> {
    if(this.selected!==''){
      var splited=this.selected.split(":");
      this.selectedDate.setHours(Number(splited[0]), Number(splited[1]), 0);    
    }
    this.appointementActivities=[];
    for(let i=0; i<this.selectedActivityItems.length;i++){     
      let activity= new ActivityTypeModel(this.selectedActivityItems[i].activityTypeId,this.selectedActivityItems[i].activityTypeLabel);
      this.appointementActivities.push(activity);
    }
    this.appointementPlaces=[];
    for(let i=0; i<this.selectedPlacesItems.length;i++){
      this.appointementPlaces.push(this.selectedPlacesItems[i].superPlaceLabel);
    }

    this.appointement.apointementActivitiesDto=this.appointementActivities;
    this.appointement.apointementPlaces=this.appointementPlaces;
    this.appointement.appointementDate=this.selectedDate;
    if(this.appointement.appointementParticipantType=="Single"){
      this.appointement.appointementParticipantType="SINGLE";
    }
    this.appointement.agentUuid=this.agentUuid;
    this.appointmentService.createAppointment(this.appointement).subscribe(response => {
      this.initialise();
      this.modalRef.dismiss("dismiss");
    }, error => {
    });

    
  }

  getFiltredPlaces(text: any) {
    this.agentService.getFiltredPlaces(text.term, 5).subscribe(
      result => {
        this.places = [...result];
      }
    );
  }

  getFiltredActivities(text: any) {
    this.agentService.getFiltredActivities(text.term, 5).subscribe(
      result => {
        this.activities = [...result];
      }
    );
  }
  onOpen(elem: any) {
    if (elem.searchInput.nativeElement.value == "") {
      elem.close();
    }
  }

  onSelect(event: any) {
    this.selectedDate = event;
    var formatedDate=this.datepipe.transform(this.selectedDate, this.format);
    this.appointmentService.getAvalibilityByDay(this.agentUuid, formatedDate).subscribe(
      result => {
        this.availibilities=result;
      }
    );

  }

  initialise(){
    this.appointementPlaces = [];
    this.appointementActivities= [];
    this.appointement=new AppointementModel(new Date(),"","","","",this.appointementPlaces,this.appointementActivities,0,"Single","");
    this.selected='';
    this.selectedDate=new Date();
    this.selectedPlacesItems=[];
    this.selectedActivityItems=[];
    if(this.agentUuid)
    {
      var formatedDate=this.datepipe.transform(this.selectedDate, this.format);
      this.appointmentService.getAvalibilityByDay(this.agentUuid, formatedDate).subscribe(
        result => {
          this.availibilities=result;
        }
      );
    }
    
  }

}
