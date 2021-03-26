import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISport } from '../sport';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  constructor(private http: HttpClient) { }

  getSportData(){
    const data : ISport[] = [
      {
        title: 'Football is......',
        description: 'dsadsa dsa  dsa dsa dsa dsa d as dsa d as d as dsa d sa d sa d as d as d sa  dsa',
        image_url: 'https://images.unsplash.com/photo-1488474739786-757973c2dff6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=958&q=80'
      },
      {
        title: 'Soccer is......',
        description: 'dsadsa dsa  dsa dsa dsa dsa d as dsa d as d as dsa d sa d sa d as d as d sa  dsa',
        image_url: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2102&q=80'
      },
      {
        title: 'Basketball is......',
        description: 'dsadsa dsa  dsa dsa dsa dsa d as dsa d as d as dsa d sa d sa d as d as d sa  dsa',
        image_url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2134&q=80'
      },
      {
        title: 'Swimming is......',
        description: 'dsadsa dsa  dsa dsa dsa dsa d as dsa d as d as dsa d sa d sa d as d as d sa  dsa',
        image_url: 'https://images.unsplash.com/photo-1560090995-01632a28895b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80'
      },
      {
        title: 'Tennis is......',
        description: 'dsadsa dsa  dsa dsa dsa dsa d as dsa d as d as dsa d sa d sa d as d as d sa  dsa',
        image_url: 'https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80'
      }
    ]
    return data
  }
}
