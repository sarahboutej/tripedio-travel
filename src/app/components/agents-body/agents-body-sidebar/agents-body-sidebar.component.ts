import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-agents-body-sidebar',
  templateUrl: './agents-body-sidebar.component.html',
  styleUrls: ['./agents-body-sidebar.component.scss']
})
export class AgentsBodySidebarComponent implements OnInit {
  @Output() consultancyEvent = new EventEmitter<boolean>();
  @Input() mediaDivision = 'desktop';
  
  constructor() { }

  ngOnInit(): void {
  }

  consultancyFeeChange(event: any) {
    this.consultancyEvent.emit(event);
  }
}
