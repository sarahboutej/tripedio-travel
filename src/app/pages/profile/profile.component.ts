import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Output()
  agentUuid:any='';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.agentUuid = params['agentUuid'];
      if(!this.agentUuid || this.agentUuid == '') {
         this.router.navigateByUrl(`/`);
      }
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
