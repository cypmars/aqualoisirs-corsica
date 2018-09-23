import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './models/Item';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   constructor() {
   }
}
