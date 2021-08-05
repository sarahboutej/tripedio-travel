import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agents-body',
  templateUrl: './agents-body.component.html',
  styleUrls: ['./agents-body.component.scss']
})
export class AgentsBodyComponent implements OnInit {
  displaySidebar: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
displaySidebarMobile() {
  this.displaySidebar = !this.displaySidebar;
}
}
