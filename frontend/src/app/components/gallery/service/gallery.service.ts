import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getImages() : Observable<any>{
    return this.http.get('...')
      .pipe(map((res:any) => {
        console.log(res);
        // sort, filter, modify data
        return res;
      }));
  }
}
