import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agent-gallery',
  templateUrl: './agent-gallery.component.html',
  styleUrls: ['./agent-gallery.component.scss']
})
export class AgentGalleryComponent implements OnInit {

  @Input()
  agentCountryGallery: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
