import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'app-agent-video',
  templateUrl: './agent-video.component.html',
  styleUrls: ['./agent-video.component.scss']
})
export class AgentVideoComponent implements OnInit {

  @Input()
  agentVideo: any = '';
  playVideo: boolean = true;
  urlBack= UtilsService.BASE_API_URL;

  constructor() { }

  ngOnInit(): void {
  }

  triggerVideo() {
    var myVideo: any = document.getElementById("agent-video");
    if (myVideo.paused) {
      myVideo.play();
      this.playVideo = false;
    }
    else {
      myVideo.pause();
      this.playVideo = true;
    }
  }

}
