import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-agents-body-sidebar',
  templateUrl: './agents-body-sidebar.component.html',
  styleUrls: ['./agents-body-sidebar.component.scss']
})
export class AgentsBodySidebarComponent implements OnInit {
  @Output() consultancyEvent = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  consultancyFeeChange(event: any) {
    this.consultancyEvent.emit(event);
  }
}
