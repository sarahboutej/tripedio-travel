import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agent-information',
  templateUrl: './agent-information.component.html',
  styleUrls: ['./agent-information.component.scss']
})
export class AgentInformationComponent implements OnInit {

  @Input()
  agent: any = '';

  @Input()
  agentDesc: any = '';

  @Input()
  listCountries: any = [];

  @Input()
  listactivities: any = [];


  isFullDescription: boolean = false;

  btnLabel: string = '+More'

  constructor() { }

  ngOnInit(): void {
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

}
