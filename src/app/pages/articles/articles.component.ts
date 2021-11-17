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

}
