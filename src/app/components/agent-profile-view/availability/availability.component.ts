import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {


  @Input()
  agentAvailability: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
