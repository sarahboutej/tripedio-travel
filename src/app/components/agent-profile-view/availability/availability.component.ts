import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {


  @Input()
  agentAvailability: any = [];

  agentAvailabilityDays: any = [];

  constructor() { }

  ngOnInit(): void {
    if(this.agentAvailability){
      for(var i=0;i<this.agentAvailability.length;i++){
        if(this.agentAvailability[i].agentAvailabilityDay=="MONDAY"){
          this.agentAvailability[i].agentAvailabilityDay="MONTAG"
          }else if(this.agentAvailability[i].agentAvailabilityDay=="TUESDAY"){
            this.agentAvailability[i].agentAvailabilityDay="DIENSTAG"
          }else if(this.agentAvailability[i].agentAvailabilityDay=="WEDNESDAY"){
            this.agentAvailability[i].agentAvailabilityDay="MITTWOCH"
          }else if(this.agentAvailability[i].agentAvailabilityDay=="THURSDAY"){
            this.agentAvailability[i].agentAvailabilityDay="DONNERSTAG"
          }else if(this.agentAvailability[i].agentAvailabilityDay=="FRIDAY"){
            this.agentAvailability[i].agentAvailabilityDay="FREITAG"
          }else if(this.agentAvailability[i].agentAvailabilityDay=="SATURDAY"){
            this.agentAvailability[i].agentAvailabilityDay="SAMSTAG"
          }else if(this.agentAvailability[i].agentAvailabilityDay=="SUNDAY"){
            this.agentAvailability[i].agentAvailabilityDay="SONNTAG"
          }
      }
    }
  var availabilityDays = this.agentAvailability.reduce(function (r:any, a:any) {
        r[a.agentAvailabilityDay] = r[a.agentAvailabilityDay] || [];
        r[a.agentAvailabilityDay].push({
          "day": a.agentAvailabilityDay,
          "start": a.agentAvailabilityStartDate,
          "end":a.agentAvailabilityEndDate
        });
        return r;
    }, Object.create(null));
    this.agentAvailabilityDays = Object.values(availabilityDays);
    console.warn(this.agentAvailabilityDays);
  }
}
