import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news-service.service';
import { IArticle } from './article';
import { INews } from './news'
import { NewsService } from './service/news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList : INews[] = []
  article : IArticle= {
    title: '',
    author: '',
    date: '',
    description: ''
  }
  constructor(private serv:NewsServiceService, private newsService : NewsService) { }

  ngOnInit(): void {
    this.newsList = this.newsService.getnews()
    this.article = this.newsService.getArticle()
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
