import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http:HttpClient) { }

  getNews(){
    return this.http.get('http://localhost:3000/news').pipe(map((res:any)=>{
      return res;
    }));
  }


}
