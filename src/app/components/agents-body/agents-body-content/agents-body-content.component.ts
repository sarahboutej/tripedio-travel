import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UtilsService } from 'src/app/shared/service/utils.service';
import { AppointementModalComponent } from '../../appointement-modal/appointement-modal.component';
import { ModalConfig } from '../../appointement-modal/modal.config';

@Component({
  selector: 'app-agents-body-content',
  templateUrl: './agents-body-content.component.html',
  styleUrls: ['./agents-body-content.component.scss']
})
export class AgentsBodyContentComponent implements OnInit {

  @Input()
  agentItems: any[] = [];

  urlPhotoBack= UtilsService.BASE_API_URL;

  @ViewChild('modal') private modalComponent!: AppointementModalComponent;

  modalConfig: ModalConfig={
    modalTitle: 'Beratungstermin anfragen',
    dismissButtonLabel: 'Senden',
    closeButtonLabel: 'Abbrechen'
  }

  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

  async openModal(agentUuid:any) {
    return await this.modalComponent.open(agentUuid);
  }

}
