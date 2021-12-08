import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-agents-body-sidebar',
  templateUrl: './agents-body-sidebar.component.html',
  styleUrls: ['./agents-body-sidebar.component.scss']
})
export class AgentsBodySidebarComponent implements OnInit {

  agentType:string='';
  agentType1:string='';

  @Output() consultancyEvent = new EventEmitter<boolean>();
  @Output() agentTypeEvent = new EventEmitter<string>();

  @Input() mediaDivision = 'desktop';
  
  constructor() { }

  ngOnInit(): void {
  }

  consultancyFeeChange(event: any) {
    this.consultancyEvent.emit(event);
  }

  typeAgent(event: any) {
    if(event == true){
      this.agentType = 'TRAVEL_SELLER'
      this.agentTypeEvent.emit(this.agentType);
    }else{
      this.agentType = ''
      this.agentTypeEvent.emit(this.agentType);
    }
  }
  typeAgent1(event: any) {
    if(event == true){
      this.agentType = 'TOUR_OPERATOR'
      this.agentTypeEvent.emit(this.agentType);
    }else{
      this.agentType = ''
      this.agentTypeEvent.emit(this.agentType); 
    } 
  }

}
