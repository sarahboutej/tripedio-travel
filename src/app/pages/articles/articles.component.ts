import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/shared/service/article/article.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: any = {}
  destinationUuid: any = '1';
  sectionId:number = 0;

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.destinationUuid = params['destinationUuid'];
      if (!this.destinationUuid || this.destinationUuid == '') {
        this.router.navigateByUrl(`/`);
      }

      this.articleService.getArticlesForDestination(this.destinationUuid).subscribe(response => {
        this.articles = response;
        console.log(response)
      }, error => {
        this.router.navigateByUrl('/notfoundpage');
      });

    });
  }
  




  getValueSection(event:any){
    switch (event) {
      case "Sehenswürdigkeiten":
        this.sectionId = 1;
        break;
      case "Reisespezialisten":
        this.sectionId = 2;
        break;
      case "Reiseinfos":
        this.sectionId = 3;
        break;
      case "Beste Reisezeit":
        this.sectionId = 4;
        break;
      case "Wissenswertes":
        this.sectionId = 5;
    }
    const element = document.getElementById(this.sectionId.toString()) as HTMLElement ;
    this.scrollToElement(element);

  }
  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({ behavior: "smooth" });
  }

}
