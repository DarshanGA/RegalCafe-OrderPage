import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { SelectedTickComponent } from "../selected-tick/selected-tick.component";
import { MenuItem } from '../models/menu-item.model';
import { Observable } from 'rxjs';

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
  currentItemQuantity = 0;

  @Output() addItemEvent = new EventEmitter<MenuItem>();
  @Output() removeItemEvent = new EventEmitter<void>();


  getCurrentMenuItemImage() {

    return this.assetFolderReltLocation + this.itemCatFolderName + '/' + this.menuItemImage;
  }

  increaseItemQuantity() {

    this.currentItemQuantity++;
    return this.addItemEvent.emit({ category: this.itemCatFolderName, itemName: this.itemName, quantity: this.currentItemQuantity});
  }

  decreaseItemQuantity() {

    this.currentItemQuantity = this.currentItemQuantity - 1 < 0 ? 0 : this.currentItemQuantity - 1;
    return this.removeItemEvent.emit();
  }
}

