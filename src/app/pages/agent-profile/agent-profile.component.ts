import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from 'src/app/shared/service/agent/agent.service';


@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss']
})
export class AgentProfileComponent implements OnInit {

  @Output()
  agentUuid:any='';

  constructor(private agentService:AgentService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.agentUuid = params['agentUuid'];
      if(!this.agentUuid || this.agentUuid == '') {
         this.router.navigateByUrl(`/`);
      }

      this.agentService.getAgentByUuid(this.agentUuid).subscribe(response => {
      }, error => {
        console.log(error);
          this.router.navigateByUrl('/notfoundpage');
      });

    });
  }

  ngAfterViewInit() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('topNavigation');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }

}
