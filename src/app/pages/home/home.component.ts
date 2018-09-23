import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: Array<any>;
  constructor() {
    this.images = new Array();
   }

  ngOnInit() {
    this.images.push({ id: 0, active: true, path: '/assets/img/title.png'});
    this.images.push({ id: 1, active: false, path: '/assets/img/family3.jpg'});
    this.images.push({ id: 2, active: false, path: '/assets/img/portigliolo2.jpg'});
  }

}
