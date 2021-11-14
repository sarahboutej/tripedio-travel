import { Component, Input, OnInit } from '@angular/core';
import { AgentService } from 'src/app/shared/service/agent/agent.service';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'article-travel-expert',
  templateUrl: './article-travel-expert.component.html',
  styleUrls: ['./article-travel-expert.component.scss']
})
export class ArticleTravelExpertComponent implements OnInit {
  @Input() data : any;
  urlPhotoBack= UtilsService.BASE_API_URL;
  slideOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    },
    nav: true
  };
  constructor(private agentService: AgentService) { }

  filtredAgents: any[] = [];
  filtredAgentsCount: number = 0;
  filtredMap: any = {
    offset: 10
  };
  ngOnInit(): void {
    this.getFiltredAgents()
  }
  getFiltredAgents() {
    this.filtredMap.page = 1;
    this.agentService.getFiltredAgents(this.filtredMap).subscribe(
      result => {
        this.filtredAgentsCount = result.count;
        this.filtredAgents = [...result.items];
      }
    );
  }
  counter(i: number) {
    return new Array(i);
  }

}
