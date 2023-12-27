// shared.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  selectedSnacks: any[] = [];

  addToOrder(snack: any) {
    this.selectedSnacks.push(snack);
  }
}
