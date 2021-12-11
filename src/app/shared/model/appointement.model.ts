import { ActivityTypeModel } from './activity-type.model';
import { AppointementProposalsModel } from './appointement-proposals.model';

export class AppointementModel {

appointementDate:any;
userEmail: string;
userFirstName: string;
userLastName: string;
agentUuid:string;
apointementPlaces:string[];
apointementActivitiesDto :ActivityTypeModel[];
apointementBudget:number;
appointementParticipantType:string;
userPhone: string;
userAppointementProposals:AppointementProposalsModel[];
constructor(appointementDate:Date,
    userEmail: string,
    userFirstName: string,
    userLastName: string,
    agentUuid:string,
    apointementPlaces:string[],
    apointementActivitiesDto :any[],
    apointementBudget:number,
    appointementParticipantType:string,
    userPhone: string,
    userAppointementProposals:AppointementProposalsModel[]){

this.appointementDate=appointementDate;
this.userEmail = userEmail;
this.userFirstName = userFirstName;
this.userLastName = userLastName;
this.userPhone = userPhone;
this.agentUuid=agentUuid;
this.apointementPlaces=apointementPlaces;
this.apointementActivitiesDto=apointementActivitiesDto;
this.apointementBudget=apointementBudget;
this.appointementParticipantType=appointementParticipantType;
this.userAppointementProposals=userAppointementProposals;
    
}

}