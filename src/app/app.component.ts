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
import { MenuItem } from './models/menu-item.model';
import { PlaceOrderComponent } from "./place-order/place-order.component";
import { BadgeComponent } from "./badge/badge.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MenuItemCardComponent, CommonModule, PlaceOrderComponent, BadgeComponent]
})
export class AppComponent {
  title = 'regal-cafe-angular';
  currentTableNumber = 1;
  menuOptions = ["Appetizers", "Beverages", "Cold Coffee Brews", "Desserts", "Icecreams(Scoops)", "Soups", "Main Course", "Pizzeria"];
  currentActiveMenuIndex = 0;
  currentActiveMenuItem = this.menuOptions[this.currentActiveMenuIndex];
  currentMenuItemsData = signal(Appetizers);
  orders: MenuItem[] = [];

  selectNewCategory(index: number) {

    this.currentActiveMenuIndex = index;
    switch (index) {

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

  updateOrders(input: MenuItem) {

    if (input) {


      const foundIndex = this.getIndexByCategoryAndName(input.category, input.itemName);
      console.log(`Found index in order array: ${foundIndex}`);
      if (foundIndex === -1) {

        if (input.quantity !== 0)
          this.orders.push(input);
      }
      else {

        if (input.quantity === 0) {

          const removedItem = this.orders.splice(foundIndex, 1);
          console.info(`Removed order item from orders array: ${JSON.stringify(removedItem)}`);
        }
        else {

          this.orders[foundIndex].quantity = input.quantity;
        }
      }
      console.log(JSON.stringify(this.orders));
    }
  }

  getIndexByCategoryAndName(givenCategory: string, givenItemName: string): number {

    return this.orders.findIndex(i => i.category === givenCategory && i.itemName === givenItemName);
  }

  getItemCount(category: string, itemName: string) {

    const foundIndex = this.getIndexByCategoryAndName(category, itemName);
    if (foundIndex === -1)
      return signal(0);
    else {

      return signal(this.orders[foundIndex].quantity);
    }
  }

  doesCategoryExists(givenCategory: string): boolean {

    return this.orders.findIndex(i => i.category === givenCategory) === -1 ? false : true;
  }

  getOrderSummary() {

    let temp = "";
    if (this.orders.length === 0)
      temp = "You haven't placed any orders yet.\n Try ordering something!";
    else {

      for (let item of this.orders) {

        temp += "\n" + item.itemName + " -----> " + item.quantity + "\n";
      }
    }

    return temp;
  }
}