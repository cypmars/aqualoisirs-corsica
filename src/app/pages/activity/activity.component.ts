import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Item } from '../../models/Item';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  itemId: number;
  activityId: string;
  categoryId: number;

  items: Array<Item>;
  activity: any;
  category;
  constructor(private route: ActivatedRoute, private router: Router, private itemsService: ItemsService) { }

  ngOnInit() {
    this.items = this.itemsService.getItems();
    if (!this.items) {
      this.itemsService.getItemsFromJson().subscribe(
        (response: Array<Item>) => {
          this.items  = response;
          this.selectActivity();
        },
        (error) => {
          console.log(error);
        },
        () => { }
      );
    } else {
      this.selectActivity();
    }
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectActivity();
      }
    });
  }

  display(i: number) {
    for (const category of this.activity['categories']) {
      category['displayed'] = false;
    }
    this.activity['categories'][i]['displayed'] = true;
  }

  isDisplayed(i: number) {
    return this.activity['categories'][i]['displayed'];
  }

  public selectActivity() {
    this.itemId = Number(this.route.snapshot.paramMap.get('id'));
    this.itemsService.setActiveItem(this.items[this.itemId]);
    this.activityId = this.route.snapshot.paramMap.get('id2');
    if (this.activityId != null) {
      this.activity = this.items[this.itemId].activities[this.activityId];
      this.itemsService.setActiveActivity(this.activity);
      for (const category of this.activity['categories']) {
        category['displayed'] = false;
      }
      this.activity['categories'][0]['displayed'] = true;
    } else {
      this.activity = this.items[this.itemId];
    }
  }

}
