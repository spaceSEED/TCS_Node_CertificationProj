import { Component, OnInit } from '@angular/core';
import { IGallery } from './gallery'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  imgList : IGallery[] = []
  constructor() { }

  ngOnInit(): void {
    this.imgList = [
      {
        imgUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
        title: 'image 1',
        description: 'dsadsadsadsa',
        active: true
      },
      {
        imgUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
        title: 'image 2',
        description: 'some news',
        active: false
      },
      {
        imgUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
        title: 'image 3',
        description: 'some news',
        active: false
      }
    ]

  }

}
