import { ActivityTypeModel } from './activity-type.model';

export class AppointementModel {

appointementDate:Date;
userEmail: string;
userFirstName: string;
userLastName: string;
agentUuid:string;
apointementPlaces:string[];
apointementActivitiesDto :ActivityTypeModel[];
apointementBudget:number;
appointementParticipantType:string;

constructor(appointementDate:Date,
    userEmail: string,
    userFirstName: string,
    userLastName: string,
    agentUuid:string,
    apointementPlaces:string[],
    apointementActivitiesDto :any[],
    apointementBudget:number,
    appointementParticipantType:string){

this.appointementDate=appointementDate;
this.userEmail = userEmail;
this.userFirstName = userFirstName;
this.userLastName = userLastName;
this.agentUuid=agentUuid;
this.apointementPlaces=apointementPlaces;
this.apointementActivitiesDto=apointementActivitiesDto;
this.apointementBudget=apointementBudget;
this.appointementParticipantType=appointementParticipantType;
    
}

}