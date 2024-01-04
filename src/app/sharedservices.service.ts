// shared.service.ts
import { Injectable } from '@angular/core';
import { Snack } from './Snack';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  selectedSnacks: Snack[] = [];
  
  addToOrder(snack: Snack) {
    // Check if the snack is already in the selectedSnacks array
    const existingItem = this.selectedSnacks.find((item: Snack) => item.id === snack.id);

<<<<<<< HEAD
=======





  
  addToOrder(snack: any) {
    // Check if the snack is already in the selectedSnacks array
    const existingItem = this.selectedSnacks.find((item: Snack) => item.id === snack.id);

>>>>>>> 4962b2b177dc466d3d990ec753696ee216b98c22
    if (existingItem) {
      // If the item exists, update the quantity
      existingItem.quantity += 1;
    } else {
      // If the item does not exist, add it to the array with a quantity of 1
      snack.quantity = 1;
      this.selectedSnacks.push(snack);
    }
  }
}
