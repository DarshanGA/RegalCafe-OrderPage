import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-menu-item-card',
  imports: [],
  templateUrl: './menu-item-card.component.html',
  styleUrl: './menu-item-card.component.css'
})
export class MenuItemCardComponent {

  assetFolderReltLocation = "../../assets/";
  @Input({required: true}) itemCatFolderName = "";
  @Input({required: true}) menuItemImage = "";
  @Input({required: true}) itemName = "";
  computedPath = "../../assets/Appetizers/chicken-burger.jpg";
  

  getCurrentMenuItemImage(){

    return this.assetFolderReltLocation + this.itemCatFolderName + '/' + this.menuItemImage;
  }
}
