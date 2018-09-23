import { Item } from '../models/Item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {

    private items: Array<Item>;
    private activeItem: Item;
    private activeActivity: any;

    constructor(public http: HttpClient) {

    }

    public getItemsFromJson(): Observable<Array<Item>> {
        return this.http.get<Array<Item>>('assets/data/data.json');
    }

    public getItems(): Array<Item> {
        return this.items;
    }

    public getActiveItem(): Item {
        return this.activeItem;
    }

    public getActiveActivity(): any {
        return this.activeActivity;
    }

    public setItems(items: Array<Item>) {
        this.items = items;
    }

    public setActiveItem(activeItem: Item) {
        this.activeItem = activeItem;
    }

    public setActiveActivity(activeActivity: any) {
        this.activeActivity = activeActivity;
    }

    public getItem(id: number): Item {
        return this.items[id];
    }


}
