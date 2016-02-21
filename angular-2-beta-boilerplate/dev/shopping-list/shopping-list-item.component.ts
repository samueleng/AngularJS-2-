/**
 * Created by sameng on 22/2/16.
 */
import {Component,EventEmitter} from 'angular2/core';
import {ListItem} from "../list-item";

@Component({
    selector: 'shopping-list-item',
    template: `
         <div class="input">
            <label for="item-name">Name</label>
            <input type="text" id="item-name" [(ngModel)]="item.name">
        </div>
        <div class="input">
            <label for="item-amt">Amount</label>
            <input type="text" id="item-amount" [(ngModel)]="item.amount">
        </div>
        <button class="danger" (click)="onDelete()">Delete Item</button>
    `,
    inputs: ['item'],
    outputs: ['removed']
})
export class ShoppingListItemComponent{
    item = {name: '', amount: 0};
    removed = new EventEmitter();

    onDelete(){
        this.removed.emit(this.item);
    }

}