import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article-sub-header',
  templateUrl: './article-sub-header.component.html',
  styleUrls: ['./article-sub-header.component.scss']
})
export class ArticleSubHeaderComponent implements OnInit {
  @Input() data : any;
  @Output() emitValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendSectionName(value:string) {
    this.emitValue.emit(value);
  }
}
