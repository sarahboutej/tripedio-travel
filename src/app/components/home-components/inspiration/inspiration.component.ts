import { Component, OnInit } from '@angular/core';
import { Subscription } from 'src/app/shared/model/subscription.model';
import { AgentService } from 'src/app/shared/service/agent/agent.service';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent implements OnInit {
  subscription:Subscription=new Subscription();
  constructor(private agentService:AgentService,private utilsService: UtilsService) { }

  ngOnInit(): void {
  }


  subscribe()
  {
    if(this.subscription.subscriptionEmail!=null && this.subscription.subscriptionEmail!="")
    {
        this.agentService.saveSubscritpion(this.subscription).subscribe((response)=>{

        this.subscription=new Subscription();

        },(error)=>{
   ;
  
        })
    }
  }
}
