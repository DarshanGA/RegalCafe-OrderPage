import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { SelectedTickComponent } from "../selected-tick/selected-tick.component";
import { MenuItem } from '../models/menu-item.model';

@Component({
  selector: 'app-menu-item-card',
  imports: [CommonModule, SelectedTickComponent],
  templateUrl: './menu-item-card.component.html',
  styleUrl: './menu-item-card.component.css'
})
export class MenuItemCardComponent {

  assetFolderReltLocation = "assets/";
  @Input({ required: true }) itemCatFolderName = "";
  @Input({ required: true }) menuItemImage = "";
  @Input({ required: true }) itemName = "";
  @Input({ required: true }) isVeg = true;
  @Input({ required: true }) currentItemQuantity = signal(0);

  @Output() orderItemChangeEvent = new EventEmitter<MenuItem>();

  getCurrentMenuItemImage() {

    return this.assetFolderReltLocation + this.itemCatFolderName + '/' + this.menuItemImage;
  }

  increaseItemQuantity() {

    this.currentItemQuantity.set(this.currentItemQuantity() + 1);
    //console.log(`Category: ${this.itemCatFolderName}, Item Name: ${this.itemName}, Item Quantity: ${this.currentItemQuantity}`);
    return this.orderItemChangeEvent.emit({ category: this.itemCatFolderName, itemName: this.itemName, quantity: this.currentItemQuantity()});
  }

  decreaseItemQuantity() {

    this.currentItemQuantity.set((this.currentItemQuantity() - 1  < 0) ? 0 : this.currentItemQuantity() - 1);
    //console.log(`Category: ${this.itemCatFolderName}, Item Name: ${this.itemName}, Item Quantity: ${this.currentItemQuantity}`);
    return this.orderItemChangeEvent.emit({ category: this.itemCatFolderName, itemName: this.itemName, quantity: this.currentItemQuantity()});
  }
}

