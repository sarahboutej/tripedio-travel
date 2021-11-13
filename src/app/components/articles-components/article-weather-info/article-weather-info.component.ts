import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'article-weather-info',
  templateUrl: './article-weather-info.component.html',
  styleUrls: ['./article-weather-info.component.scss']
})
export class ArticleWeatherInfoComponent implements OnInit {
  @Input() data : any;
  constructor() { }

  selectedIndex: number = 0;

  ngOnInit(): void {
  }

  selectItem(index: number) {
    this.selectedIndex = index;
}

}
