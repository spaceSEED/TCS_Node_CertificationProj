import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getnews(){
    const data = [
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
    return data
  }

  getArticle(){
    
  }
}
