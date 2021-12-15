import { Component, OnInit, Input, ViewChild, TemplateRef, Injectable, ViewEncapsulation } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig } from './modal.config';
import { AgentService } from 'src/app/shared/service/agent/agent.service';
import { AppointementModel } from 'src/app/shared/model/appointement.model';
import { AppointmentService } from 'src/app/shared/service/appointment/appointment.service';
import { ActivityTypeModel } from 'src/app/shared/model/activity-type.model';
import { DatePipe } from '@angular/common';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { AppointementProposalsModel } from 'src/app/shared/model/appointement-proposals.model';

@Component({
  selector: 'app-appointement-modal',
  templateUrl: './appointement-modal.component.html',
  styleUrls: ['./appointement-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe]
})
@Injectable()
export class AppointementModalComponent implements OnInit {

  @Input() public modalConfig!: ModalConfig;
  @ViewChild('modal') private modalContent!: TemplateRef<AppointementModalComponent>;
  private modalRef!: NgbModalRef;

  pageSize:number = 30;
  places: Array<any> = [];
  selectedPlacesItems: Array<any> = [];
  placesLoading = false;
  palcesSize: number = 0;
  palcesPage: number = 0;

  activities: Array<any> = [];
  selectedActivityItems: Array<any> = [];
  activitiesLoading = false;
  activitiesSize: number = 0;
  activitiesPage: number = 0;


  selectedDate = new Date();
  startAt = new Date();
  appointementPlaces: Array<any> = [];
  appointementActivities: Array<any> = [];
  proposals : Array<AppointementProposalsModel> = [];
  appointement:AppointementModel=new AppointementModel(new Date(),"","","","",this.appointementPlaces,this.appointementActivities,0,"Single","",this.proposals);

  
  selected:string="";
  selectedEnd:string="";

  agentUuid='';

  format = 'yyyy-MM-dd';
  formatAppointmentDate = 'yyyy-MM-dd HH:mm:ss';
  availibilities: Array<any> = [];
  allAvailibilities: Array<any> = [];
  endDates : string[] = [];
  showAlertError=false;
  message='';
  notshow=false;
  ischecked=false;

  constructor(private modalService: NgbModal, private agentService: AgentService,private appointmentService:AppointmentService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.initialise();
    let intervalId = setInterval(() => {
      if(this.showAlertError){
        this.showAlertError=false;
      }
      if(this.showAlertError){
        this.showAlertError=false;
      }
  }, 25000);
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

    this.appointement.appointementDate=this.proposals[0].appointementProposalsDate;
    this.appointement.userAppointementProposals=this.proposals;
    this.appointement.agentUuid=this.agentUuid;
    var isNotValidDate=false;
    //new Date().getTime()>this.selectedDate.getTime()
    if(this.proposals.find(x => new Date(x.appointementProposalsDate).getTime() < new Date().getTime())){
      isNotValidDate=true;
      this.message='Ausgewähltes Datum und Uhrzeit müssen größer als das Datum des Tages sein!';
      this.showAlertError=true;
      return;
    }
      this.appointmentService.createAppointment(this.appointement).subscribe(response => {
        this.initialise();
        this.modalRef.dismiss("dismiss");
      }, error => {
        if(error.status == 400){
          this.message='mit dieser E-Mail wurde bereits ein Agentenkonto erstellt!';
          this.showAlertError=true;
       }
      });
  }

  onSelect(event: any) {
    this.selected='';
    this.selectedEnd='';
    this.selectedDate = event;
    var formatedDate=this.datepipe.transform(this.selectedDate, this.format);
    this.appointmentService.getAvalibilityByDay(this.agentUuid, formatedDate).subscribe(
      result => {
        this.availibilities=result;
      }
    );

  }
  handleChange(event:any) {
    var splited=event.target.value.split(":");
    var date=this.selectedDate.setHours(Number(splited[0]), Number(splited[1]), 0); 
    var formatedDate=this.datepipe.transform(date, this.formatAppointmentDate);
    const prop=new AppointementProposalsModel(formatedDate,this.proposals.length);
    
    if(this.proposals.length>=2){ 
      this.notshow=true;
    }
    if(this.proposals.length<3){
      this.proposals.push(prop); 
    } 

  }

  initialise(){
    this.endDates = [];
    this.proposals= [];
    this.appointementPlaces = [];
    this.appointementActivities= [];
    this.proposals= [];
    this.appointement=new AppointementModel(new Date(),"","","","",this.appointementPlaces,this.appointementActivities,0,"Single","",this.proposals);
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
      this.appointmentService.getAllAgentavailabilities(this.agentUuid).subscribe(
        result => {
          this.allAvailibilities=result;
        }
      );
    }
    this.notshow=false;
    this.ischecked=false;
    
  }
  changeEndDate(event: any) {
    this.endDates = [];
    let result = this.availibilities.filter(idState => idState.startDate === event);
    for(let i=0; i<result.length;i++){
      this.endDates.push(result[i].endDate);
      
    }
    
  }

  dateClass() {
    return  (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDay();
    let days: number[]=[];
    // Highlight available days
    for(let i=0; i<this.allAvailibilities.length;i++){
      if(this.allAvailibilities[i].agentAvailabilityDay==='MONDAY'&& !days.includes(1)){
         days.push(1);
      }else if(this.allAvailibilities[i].agentAvailabilityDay==='TUESDAY'&& !days.includes(2)){
        days.push(2);
      }
      else if(this.allAvailibilities[i].agentAvailabilityDay==="WEDNESDAY"&& !days.includes(3)){
        days.push(3);
      }
      else if(this.allAvailibilities[i].agentAvailabilityDay==="THURSDAY"&& !days.includes(4)){
        days.push(4);
      }else if(this.allAvailibilities[i].agentAvailabilityDay==="FRIDAY"&& !days.includes(5)){
        days.push(5);
      }else if(this.allAvailibilities[i].agentAvailabilityDay==="SATURDAY"&& !days.includes(6)){
        days.push(6);
      }else if(this.allAvailibilities[i].agentAvailabilityDay==="SUNDAY"&& !days.includes(0)){
        days.push(0);
      }
    }
    return (days.includes(date)&&d>=new Date()) ? 'highlight-dates' : '';
  };
}


  //Places filter select
  getFiltredPlaces(text: any) {
    this.palcesPage = -1;
    this.places = [];
    this.fetchMorePlaces(text.term);
  }

  onOpenPlaces() {
    this.palcesPage = -1;
    this.places = [];
    this.fetchMorePlaces();
  }  
  
  onScrollPlaces(text: any, event: any) {
    if (this.placesLoading || this.palcesSize <= this.places.length) {
        return;
    }

    if (event.end + 10 >= this.places.length) {
        this.fetchMorePlaces(text);
    }
  }

  fetchMorePlaces(text?: any) {
    this.palcesPage++;
    this.placesLoading = true;
    this.agentService.getFiltredPlaces(text, this.pageSize, this.palcesPage).subscribe(
      result => {
        this.placesLoading = false;
        this.palcesSize = result.count;
        this.places = [...this.places, ...result.items];
      },
      err => {
        this.placesLoading = false;
      }
    );
  }

  //Activities filter select
  getFiltredActivities(text: any) {
     this.activitiesPage = -1;
    this.activities = [];
    this.fetchMoreActivities(text.term);
  }

  onOpenActivities() {
    this.activitiesPage = -1;
    this.activities = [];
    this.fetchMoreActivities();
  }
  
  onScrollActivities(text: any, event: any) {
    if (this.activitiesLoading || this.activitiesSize <= this.activities.length) {
        return;
    }

    if (event.end + 10 >= this.activities.length) {
        this.fetchMorePlaces(text);
    }
  }

  fetchMoreActivities(text?: any) {
    this.activitiesPage++;
    this.activitiesLoading = true;
    this.agentService.getFiltredActivities(text, this.pageSize, this.activitiesPage).subscribe(
      result => {
        this.activitiesLoading = false;
        this.activitiesSize = result.count;
        this.activities = [...this.activities, ...result.items];
      },
      err => {
        this.activitiesLoading = false;
      }
    );
  }
}
