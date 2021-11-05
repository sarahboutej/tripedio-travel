import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AppointementModalComponent } from '../../appointement-modal/appointement-modal.component';
import { ModalConfig } from '../../appointement-modal/modal.config';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'app-agent-gallery',
  templateUrl: './agent-gallery.component.html',
  styleUrls: ['./agent-gallery.component.scss']
})
export class AgentGalleryComponent implements OnInit {

  @Input()
  agentCountryGallery: any;
  @ViewChild('modal') private modalComponent!: AppointementModalComponent;
  urlBack= UtilsService.BASE_API_URL;

  modalConfig: ModalConfig={
    modalTitle: 'Beratungstermin anfragen',
    dismissButtonLabel: 'Senden',
    closeButtonLabel: 'Abbrechen'
  }
  @Input()
  agentUuid: any = '';

  constructor() { }

  ngOnInit(): void {
    if(this.agentCountryGallery){
      this.agentCountryGallery.agentGalleryDescription=decodeURIComponent(escape(this.agentCountryGallery.agentGalleryDescription));
    }
  }

  async openModal() {
    return await this.modalComponent.open(this.agentUuid);
  }

}
