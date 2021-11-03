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
