import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'app-agent-video-mobile',
  templateUrl: './agent-video-mobile.component.html',
  styleUrls: ['./agent-video-mobile.component.scss']
})
export class AgentVideoMobileComponent implements OnInit {

  @Input()
  agentVideo: any = '';
  playVideo: boolean = true;
  urlBack= UtilsService.BASE_API_URL;
  @Input()
  agentVideoPresentation: any = '';
  poster='assets/images/cover-video-default.webp';
  constructor() { }

  ngOnInit(): void {
    if(this.agentVideoPresentation!=null &&this.agentVideoPresentation!=undefined){
      this.poster=this.urlBack+this.agentVideoPresentation.mediaUrl;
    }
  }

  triggerVideo() {
    var myVideo: any = document.getElementById("agent-video-mobile");
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
