import { Component, signal } from '@angular/core';
import { MenuItemCardComponent } from "./menu-item-card/menu-item-card.component";
import Appetizers from "../assets/data/Appetizers.json"
import Beverages from "../assets/data/Beverages.json"
import ColdCoffeeBrews from "../assets/data/Cold Coffee Brews.json"
import Desserts from "../assets/data/Desserts.json"
import IcecreamsScoops from "../assets/data/Icecreams(Scoops).json"
import Soups from "../assets/data/Soups.json"
import MainCourse from "../assets/data/Main Course.json"
import Pizzeria from "../assets/data/Pizzeria.json"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MenuItemCardComponent, CommonModule]
})
export class AppComponent {
  title = 'regal-cafe-angular';
  currentTableNumber = 1;
  menuOptions = ["Appetizers", "Beverages", "Cold Coffee Brews", "Desserts", "Icecreams(Scoops)", "Soups", "Main Course", "Pizzeria"];
  currentActiveMenuIndex = 0;
  currentActiveMenuItem = this.menuOptions[this.currentActiveMenuIndex];
  currentMenuItemsData = signal(Appetizers) ;

  selectNewCategory(index: number){

    this.currentActiveMenuIndex = index;
    switch(index){

      case 0: this.currentMenuItemsData.set(Appetizers);
      break;

      case 1: this.currentMenuItemsData.set(Beverages);
      break;

      case 2: this.currentMenuItemsData.set(ColdCoffeeBrews);
      break;
      
      case 3: this.currentMenuItemsData.set(Desserts);
      break;

      case 4: this.currentMenuItemsData.set(IcecreamsScoops);
      break;

      case 5: this.currentMenuItemsData.set(Soups);
      break;

      case 6: this.currentMenuItemsData.set(MainCourse);
      break;

      case 7: this.currentMenuItemsData.set(Pizzeria);
      break;
    }
  }
}
