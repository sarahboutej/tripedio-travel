import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'app-agents-body-content',
  templateUrl: './agents-body-content.component.html',
  styleUrls: ['./agents-body-content.component.scss']
})
export class AgentsBodyContentComponent implements OnInit {

  @Input()
  agentItems: any[] = [];

  urlPhotoBack= UtilsService.BASE_API_URL;

  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

}
