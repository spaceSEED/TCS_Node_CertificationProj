import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news-service.service';
import { INews } from './news'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList : INews[] = []
<<<<<<< HEAD
  
  constructor() { }
=======

  constructor(private serv:NewsServiceService) { }
>>>>>>> d31f530144ac2e92c0fe140e34f01cdf6fe65d4b

  ngOnInit(): void {
    this.newsList = [
      {
        title: "title1",
        pub_date: '12/2/3333',
        description: 'dajabh ndasjkdnas mdkasldnas mdlksamdsa lkdmasldsa k'
      },
      {
        title: "title2",
        pub_date: '12/2/133',
        description: 'dajabh ndasjkdnas mdkasldnas mdlksamdsa lkdmasldsa k dsadsa dsadsa'
      },
      {
        title: "title3",
        pub_date: '12/2/4433',
        description: 'dajabh ndasjkdnas mdkasldnas mdlksamdsa lkdmasldsa k dsadsa  dsadsa  dsa ds ad sadas'
      }
    ];
    this.getNews();
  }

  getNews(){
    this.serv.getNews().subscribe((res:any)=>{
      this.newsList[0]=res[0];
      this.newsList[1]=res[1];
      this.newsList[2]=res[2];
    });
  }

}
