import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ItemsService } from '../../../services/items.service';
import { Item } from '../../../models/Item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items;
  activeItem;
  activeActivity;
  constructor(  private route: ActivatedRoute,
                private router: Router,
                private itemsService: ItemsService,
                public http: HttpClient) {
     }

  ngOnInit() {
    this.itemsService.getItemsFromJson().subscribe(
      (response: Array<Item>) => {
        this.itemsService.setItems(response);
        this.items = this.itemsService.getItems();
        this.activeItem = this.items[0];
        console.log('items in header: ', this.items);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete function');
      }
    );
  }

  goToActivityPage(path: string, itemId: number, actId: number) {
    console.log('dropItemIndex: ', itemId, ', activityIndex: ', actId);
    if (actId != null) {
      console.log('path1: ',
      path + '/' + itemId + '/' + actId);
      this.activeItem = this.items[itemId];
      this.activeActivity = this.items[itemId]['activities'][actId];
      this.router.navigate([path + '/' + itemId + '/' + actId]);
    } else {
      console.log('path2: ',
      path + '/' + itemId);
      this.activeItem = this.items[itemId];
      this.router.navigate([path + '/' + itemId]);
    }
  }

  goToHomePage() {
    this.router.navigate(['accueil']);
    this.activeItem = this.items[0];
  }

  goToContactPage() {
    this.router.navigate(['contact']);
    this.activeItem = this.items[6];
  }

}
