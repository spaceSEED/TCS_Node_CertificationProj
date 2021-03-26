import { Component, OnInit } from '@angular/core';
import { INews } from './news'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList : INews[] = []

  constructor() { }

  ngOnInit(): void {
    this.newsList = [
      {
        title: "title1",
        date: '12/2/3333',
        description: 'dajabh ndasjkdnas mdkasldnas mdlksamdsa lkdmasldsa k'
      },
      {
        title: "title2",
        date: '12/2/133',
        description: 'dajabh ndasjkdnas mdkasldnas mdlksamdsa lkdmasldsa k dsadsa dsadsa'
      },
      {
        title: "title3",
        date: '12/2/4433',
        description: 'dajabh ndasjkdnas mdkasldnas mdlksamdsa lkdmasldsa k dsadsa  dsadsa  dsa ds ad sadas'
      }
    ]
  }

}
