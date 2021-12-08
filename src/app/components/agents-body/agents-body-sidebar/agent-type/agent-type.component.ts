import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-agent-type',
  templateUrl: './agent-type.component.html',
  styleUrls: ['./agent-type.component.scss']
})
export class AgentTypeComponent implements OnInit {
  
  agentType: boolean = false;
  agentType1: boolean = false;

  @Input() division = '';

  @Output() agentTypeEvent = new EventEmitter<boolean>();
  @Output() agentTypeEvent1 = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  checkTypeAgent(event:Event){
    if(this.agentType1 == true){
      this.agentType1 = false;
    }
    //const ischecked = (<HTMLInputElement>event.target).checked;
    this.agentTypeEvent.emit(this.agentType);
  }
  
  checkTypeAgent1(event:Event){

    if(this.agentType == true){
      this.agentType = false;
    }
    //const ischecked = (<HTMLInputElement>event.target).checked;
    this.agentTypeEvent1.emit(this.agentType1);
  }
}
