import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-agent-options',
  templateUrl: './agent-options.component.html',
  styleUrls: ['./agent-options.component.scss']
})
export class AgentOptionsComponent implements OnInit {
  noConsultancyFee: boolean = false;
  @Input() division = '';

  @Output() consultancyEvent = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  checkConsultancyFee(event:Event){
    const ischecked = (<HTMLInputElement>event.target).checked;
    this.consultancyEvent.emit(ischecked);
  }

}
