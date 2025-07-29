import { Component } from '@angular/core';
import { BadgeComponent } from "../badge/badge.component";

@Component({
  selector: 'app-place-order',
  imports: [BadgeComponent],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {

  showOrderSummary = false;

  toggelOrderSummary(){

    this.showOrderSummary = !this.showOrderSummary;
  }
}
