import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article-weather-info',
  templateUrl: './article-weather-info.component.html',
  styleUrls: ['./article-weather-info.component.scss']
})
export class ArticleWeatherInfoComponent implements OnInit {

  constructor() { }

  weatherArray = [
    { month: 'Januar', min: 7, max: 10, rainDay: 7 },
    { month: 'Februar', min: 7, max: 16, rainDay: 7 },
    { month: 'März', min: 9, max: 19, rainDay: 6 },
    { month: 'April', min: 11, max: 22, rainDay: 5 },
    { month: 'Mai', min: 14, max: 36, rainDay: 3 },
    { month: 'Juni', min: 18, max: 51, rainDay: 1 },
    { month: 'Juli', min: 21, max: 70, rainDay: 0},
    { month: 'August', min: 22, max: 52, rainDay: 1},
    { month: 'September', min: 20, max: 68, rainDay: 4},
    { month: 'Oktober', min: 16, max: 26, rainDay: 5},
    { month: 'November', min: 12, max: 10, rainDay: 6},
    { month: 'Dezember', min: 8, max: 8, rainDay: 7},
  ];

  selectedIndex: number = 0;

  ngOnInit(): void {
  }

  selectItem(index: number) {
    this.selectedIndex = index;
}

}
